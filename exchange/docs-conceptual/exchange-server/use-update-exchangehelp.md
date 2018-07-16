---
title: "Use Update-ExchangeHelp to update Exchange PowerShell help topics on Exchange servers"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 12/20/2016
ms.audience: ITPro
ms.topic: article
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 219f78a3-f0e5-4dc6-9787-9a0b9756ee09
monikerRange: "exchserver-ps-2016"
description: "Administrators can learn how to use Update-ExchangeHelp to update Exchange cmdlet reference topics that are available in Exchange Management Shell in Exchange 2016"
---

# Use Update-ExchangeHelp to update Exchange PowerShell help topics on Exchange servers
Exchange cmdlet reference topics are created and updated all the time, but it's been difficult to get those updates into Exchange code in a timely manner so they're available in the Exchange Management Shell. Now, you can use the **Update-ExchangeHelp** cmdlet in the Exchange Management Shell to get the most up-to-date cmdlet reference topics for the command line in Exchange 2016.The **Update-ExchangeHelp** cmdlet automatically connects to a predefined website, compares the version of the local Exchange server and the installed languages to what's available in the update packages, and then downloads and installed the updated Exchange Management Shell help. Typically, the cmdlet connects to the Internet, but you can configure it to connect to an Intranet source inside your organization.

**Contents**:

[Use Update-ExchangeHelp on a single Internet-connected Exchange server](use-update-exchangehelp.md#Internet)

[Configure Update-ExchangeHelp to get updates from an internal web server](use-update-exchangehelp.md#Internal)

[Details about Update-ExchangeHelp](use-update-exchangehelp.md#Details)
## What do you need to know before you begin?
<a name="RTT"> </a>

- Estimated time to complete:
    
  - Use **Update-ExchangeHelp** on a single Internet-connected Exchange server: less than 5 minutes.
    
  - Configure **Update-ExchangeHelp** to get updates from an internal web server: 30 minutes.
    
- You need to be assigned permissions before you can perform this procedure or procedures. To see what permissions you need, see the "Exchange server configuration settings" entry in the [Exchange and Shell infrastructure permissions](https://technet.microsoft.com/library/3646a4e8-36b2-41fb-89a4-79b0963fcb11.aspx) topic.
    
- You can only use PowerShell to perform this procedure. To learn how to open the Exchange Management Shell in your on-premises Exchange organization, see [Open the Exchange Management Shell](open-the-exchange-management-shell.md).
    
> [!TIP]
> Having problems? Ask for help in the Exchange forums. Visit the forums at: [Exchange Server](https://go.microsoft.com/fwlink/p/?linkId=60612). 
  
## Use Update-ExchangeHelp on a single Internet-connected Exchange server
<a name="Internet"> </a>

This method requires that the Exchange 2016 server has direct access to the Internet.
  
Run the following command in the Exchange Management Shell:
  
```
Update-ExchangeHelp -Verbose
```

 **Notes:**
  
- The _Verbose_ switch is important because it provides useful information. For example, it tells you if your Exchange server already has the latest version of help installed, or if you've run the command in the last 24 hours.
    
- If you want to check for updates again within 24 hours, use the _Force_ switch.
    
[Return to top](use-update-exchangehelp.md#RTT)
  
## Configure Update-ExchangeHelp to get updates from an internal web server
<a name="Internal"> </a>

In some organizations, internal servers don't have access to the Internet. If your internal Exchange 2016 servers don't have Internet access, you can configure **Update-ExchangeHelp** to point to an internal web server to get updates. The steps are as follows:
  
1. Download and inspect the ExchangeHelpInfo.xml manifest file.
    
2. Download the update packages, publish the update packages on an internal web server, and customize the ExchangeHelpInfo.xml manifest file.
    
3. Publish the customized ExchangeHelpInfo.xml manifest file on an internal web server.
    
4. Modify the registry of the Exchange servers to point to the customized ExchangeHelpInfo.xml manifest file.
    
5. Use and maintenance of **Update-ExchangeHelp**.
    
[Return to top](use-update-exchangehelp.md#RTT)
  
### Step 1. Download and inspect the ExchangeHelpInfo.xml manifest file

On a computer that has Internet access, open [https://go.microsoft.com/fwlink/p/?LinkId=287244](https://go.microsoft.com/fwlink/p/?LinkId=287244), save the ExchangeHelpInfo.xml manifest file in a location that's easy to remember, and open the file in Notepad.
  
Each available update package is defined in a **\<HelpVersion\>** section, and each **\<HelpVersion\>** section contains the following keys.
  
- **\<Version\>** This key identifies the version Exchange that the update package applies to. `15.01.xxxx.xxx` is Exchange 2016. `15.00.xxxx.xxx` is Exchange 2013. Typically, this key specifies a range of versions.
    
- **\<CulturesUpdated\>** This key identifies the language that the update package applies to. This key might specify only one language or multiple languages.
    
- **\<Revision\>** This key identifies the order that the updated packages were released for the major version of Exchange. In other words, the first update package released for Exchange 2016 is `001`, the second is `002`, etc. And, there's no relationship between the update packages and the order they were released in. For example, `001` might be an English only update, `002` might be an update for all other supported languages, and `003` might be a German-only update.
    
- **\<CabinetUrl\>** This key identifies the name and location of the update package for the **\<HelpVersion\>** section.
    
The update package that's defined in a **\<HelpVersion\>** section applies to an Exchange server based on the combination of **\<Version\>** and **\<CulturesUpdated\>** values.
  
You might find that multiple **\<HelpVersion\>** sections apply to your Exchange servers for a given version of Exchange. For example, there might be multiple updates for the same language, or separate updates for different languages that both apply to your Exchange servers because you have multiple languages installed. Either way, you need only the most recent update for your Exchange server version and language based on the **\<Revision\>** key.
  
For example, suppose your Exchange servers are running Exchange 2016 version `15.01.0225.040` with English and Spanish installed, and the ExchangeHelpInfo.xml manifest file looks like this:
  
```
<?xml version="1.0" encoding="utf-8"?>
<ExchangeHelpInfo>
  <HelpVersions>
    <HelpVersion>
      <Version>15.01.0225.030-15.01.0225.050</Version>
       <Revision>001</Revision>
      <CulturesUpdated>en</CulturesUpdated>
      <CabinetUrl>http://download.microsoft.com/download/8/7/0/870FC9AB-6D22-4478-BFBF-66CE775BCD18/ExchangePS_Update_En.cab</CabinetUrl>
    </HelpVersion>
    <HelpVersion>
      <Version>15.01.0225.030-15.01.0225.050</Version>
      <Revision>002</Revision>
      <CulturesUpdated>de, es, fr, it, ja, ko, pt, pu, ru, zh-HanS, zh-HanT</CulturesUpdated>
      <CabinetUrl>http://download.microsoft.com/download/8/7/0/870FC9AB-6D22-4478-BFBF-66CE775BCD18/ExchangePS_Update_Loc.cab</CabinetUrl>
    </HelpVersion>
    <HelpVersion>
      <Version>15.01.0225.030-15.01.0225.050</Version>
       <Revision>003</Revision>
      <CulturesUpdated>en</CulturesUpdated>
      <CabinetUrl>http://download.microsoft.com/download/8/7/0/870FC9AB-6D22-4478-BFBF-66CE775BCD18/ExchangePS_Update_En2.cab</CabinetUrl>
    </HelpVersion>
  </HelpVersions>
</ExchangeHelpInfo>
```

In this example, all the updates apply to you based on the version of Exchange. However, you need only revision `003` for English, and revision `002` for Spanish. You don't need revision `001` for English because revision `003` is newer.
  
[Return to top](use-update-exchangehelp.md#RTT)
  
### Step 2. Download the update packages, publish the update packages on an internal web server, and customize the ExchangeHelpInfo.xml manifest file

The easiest and least time-consuming approach might be to download every available update package that's defined in the ExchangeHelpInfo.xml manifest file. The benefits to this approach are:
  
- **No analysis required**: It's difficult to make a mistake and accidentally miss an update that applies to you, because you're downloading every available update package. The **Update-ExchangeHelp** cmdlet ignores the update packages that don't apply to the Exchange server, so it doesn't hurt to download unneeded update packages.
    
- **Easier maintenance**: Whenever a new update package is released, you don't need to spend time determining if the update package applies to you. You just download and customize the new ExchangeHelpInfo.xml manifest file, and download the new cabinet (.cab) file that's defined in it.
    
To download all of the update packages, follow these steps.
  
1. Download all of the .cab files that are defined in the ExchangeHelpInfo.xml manifest file by using the **\<CabinetUrl\>** values. Save the files in a location that's easy to remember.
    
2. Publish the .cab files on an internal web server (for example `http://intranet.contoso.com/downloads/exchange`).
    
3. Modify the URL values of the **\<CabinetUrl\>** keys to point to the internal web server where you published the .cab files.
    
    For example, change the value `http://download.microsoft.com/download/8/7/0/870FC9AB-6D22-4478-BFBF-66CE775BCD18/ExchangePS_Update_En.cab` to `http://intranet.contoso.com/downloads/exchange/ExchangePS_Update_En.cab`.
    
4. Save the customized ExchangeHelpInfo.xml manifest file.
    
The drawback to this approach is you download more .cab files than you actually need, and the unneeded .cab files consume space on your internal web server.
  
If you want to identify only the update packages that apply to you, follow these steps.
  
1. Find the version details for your Exchange servers.
    
    To find the version details on a single Exchange server, run the following command:
    
    ```
    Get-Command Exsetup.exe | ForEach {$_.FileVersionInfo}
    ```

    To find the version details for all Exchange servers in your organization, run the following command:
    
    ```
    Get-ExchangeServer | Sort-Object Name | ForEach {Invoke-Command -ComputerName $_.Name -ScriptBlock {Get-Command ExSetup.exe | ForEach{$_.FileVersionInfo}}} | Format-Table -Auto
   ```

    The result for **ProductVersion** will be in the format `15.01.0225.xxx`.
    
2. Find the **\<HelpVersion\>** sections in the ExchangeHelpInfo.xml manifest file that apply to your Exchange servers based on the values of the **\<Version\>**, **\<CulturesUpdated\>**, and **\<Revision\>** keys. The methodology was described in Step 1.
    
After you identify the update packages that apply to you, follow these steps:
  
1. Download the applicable .cab files by using the **\<CabinetUrl\>** values. Save the files in a location that's easy to remember.
    
2. Publish the .cab files on an internal web server (for example `http://intranet.contoso.com/downloads/exchange`).
    
3. Modify the URL values of the **\<CabinetUrl\>** keys to point to the internal web server where you published the .cab files.
    
    For example, change the value `http://download.microsoft.com/download/8/7/0/870FC9AB-6D22-4478-BFBF-66CE775BCD18/ExchangePS_Update_En.cab` to `http://intranet.contoso.com/downloads/exchange/ExchangePS_Update_En.cab`.
    
4. Optionally, you can delete the **\<HelpInfo\>** sections that don't apply to you.
    
5. Save the customized ExchangeHelpInfo.xml manifest file.
    
[Return to top](use-update-exchangehelp.md#RTT)
  
### Step 3. Publish the customized ExchangeHelpInfo.xml manifest file on an internal web server

Publish the customized ExchangeHelpInfo.xml manifest file from Step 2 on an internal web server that's accessible to your internal Exchange servers. For example, `http://intranet.contoso.com/downloads/exchange/ExchangeHelpInfo.xml`. You'll use the URL value of this location in Step 4.
  
Note that there's no relationship between the ExchangeHelpInfo.xml manifest file and .cab file locations. You can have them available at the same URL or on different servers.
  
[Return to top](use-update-exchangehelp.md#RTT)
  
### Step 4. Modify the registry of your Exchange servers to point to the customized ExchangeHelpInfo.xml manifest file

You need the download location of the customized ExchangeHelpInfo.xml manifest file that you configured in Step 3. This example uses the value `http://intranet.contoso.com/downloads/exchange/ExchangeHelpInfo.xml`.
  
1. Copy and paste the following text into Notepad, customize the URL for your environment, and save the file as UpdateExchangeHelp.reg in a location that's easy to remember.
    
  ```
  Windows Registry Editor Version 5.00

 [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ExchangeServer\v15\UpdateExchangeHelp]
 "ManifestUrl"="http://intranet.contoso.com/downloads/exchange/ExchangeHelpInfo.xml"
  ```

2. Run the UpdateExchangeHelp.reg file on your internal Exchange servers.
    
[Return to top](use-update-exchangehelp.md#RTT)
  
### Step 5. Use and maintenance of Update-ExchangeHelp

Now, when you run **Update-ExchangeHelp** in the Exchange Management Shell on your internal Exchange servers, the command gets download information and downloads files from the internal locations you specified.
  
More interesting is the long-term maintenance of this customized configuration. Basically, you'll need to repeat Step 1 through Step 3 when you discover an update has been made available for Exchange cmdlet reference help, and you want to deploy that updated help to your Exchange servers. 
  
An easy way to find new update packages is to periodically run **Update-ExchangeHelp** on an Internet-connected Exchange server, or computer that has the Exchange mangement tools installed.
  
[Return to top](use-update-exchangehelp.md#RTT)
  
## Details about Update-ExchangeHelp
<a name="Details"> </a>

Windows PowerShell has the **Update-Help** and **Save-Help** cmdlets for online and offline updates of cmdlet reference topics. However, these cmdlets don't support Exchange cmdlet help, so a specific Exchange cmdlet is required to update cmdlet reference topics in the Exchange Management Shell.
  
[Return to top](use-update-exchangehelp.md#RTT)
  

