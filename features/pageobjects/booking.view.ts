class BookingStay{
    public get selectRoomBtn(){
        return $('//android.widget.Button[@resource-id="com.booking:id/select_room_cta"]')
    }

    /*public get selectItem(){
        return $('//android.widget.Button[@resource-id="com.booking:id/room_selector_entry_button"]')
    }*/

    //text comparation
    public get selectItemText(){
        return $('//android.widget.TextView[@resource-id="com.booking:id/rooms_item_select_text_view"]')
    }

    public get saveRoomPref(){
        return $('//android.widget.Button[@resource-id="com.booking:id/bottom_sheet_selector_confirm_cta"]')
    }

    public get confirmRoomPref(){
        return $('//android.widget.Button[@resource-id="com.booking:id/room_pref_select"]')
    }

    public get reserveBtn(){
        return $('//android.widget.Button[@resource-id="com.booking:id/main_action"]')
    }


    public async chooseStay(){
        await this.selectRoomBtn.click();
        await browser.pause(1500);

        do{
            await driver.touchAction([{ action: 'longPress', x: 500, y: 1000 }, { action: 'moveTo', x: 500, y: -100 }, 'release'])
        }while(await this.selectItemText.isExisting() !== true)

        await this.selectItemText.click();

        /*await this.selectItem.click();
        await browser.pause(1500);*/


        /*await this.selectItemText.getText() === "SELECT" ? (
            await this.selectItemLayout.click(),
            await browser.pause(1500),
            await this.saveRoomPref.click()
        ) : (
            await this.selectItemLayout.click(),
            await browser.pause(1500),
            await this.confirmRoomPref.click()
        )*/

        await this.reserveBtn.click();
        await browser.pause(2000);
    }
}

export default new BookingStay();