---
applicable: Skype for Business Server 2019
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: SkypeForBusiness
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/skype/set-csipphonepolicy
schema: 2.0.0
title: Set-CsIPPhonePolicy
---

# Set-CsIPPhonePolicy

## SYNOPSIS
Use the Set-CsIPPhonePolicy cmdlet to modify the settings of the Skype for Business Online and Skype for Business Server 2019 global IP phone policy. IP phone policies define the Skype for Business features that are available to users.

## SYNTAX

### Identity (Default)
```
Set-CsIPPhonePolicy [-Tenant <Guid>] [-UserDialTimeoutMS <UInt64>] [-KeyboardLockMaxPinRetry <UInt64>]
 [-PrioritizedCodecsList <String>] [-EnablePowerSaveMode <Boolean>]
 [-PowerSaveDuringOfficeHoursTimeoutMS <UInt64>] [-PowerSavePostOfficeHoursTimeoutMS <UInt64>]
 [-EnableOneTouchVoicemail <Boolean>] [-DateTimeFormat <Int32>] [-EnableDeviceUpdate <Boolean>]
 [-EnableExchangeCalendaring <Boolean>] [-EnableBetterTogetherOverEthernet <Boolean>]
 [-BetterTogetherOverEthernetPairingMode <String>] [-LocalProvisioningServerUser <String>]
 [-LocalProvisioningServerPassword <String>] [-LocalProvisioningServerAddress <String>]
 [-LocalProvisioningServerType <String>] [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### Instance
```
Set-CsIPPhonePolicy [-Tenant <Guid>] [-UserDialTimeoutMS <UInt64>] [-KeyboardLockMaxPinRetry <UInt64>]
 [-PrioritizedCodecsList <String>] [-EnablePowerSaveMode <Boolean>]
 [-PowerSaveDuringOfficeHoursTimeoutMS <UInt64>] [-PowerSavePostOfficeHoursTimeoutMS <UInt64>]
 [-EnableOneTouchVoicemail <Boolean>] [-DateTimeFormat <Int32>] [-EnableDeviceUpdate <Boolean>]
 [-EnableExchangeCalendaring <Boolean>] [-EnableBetterTogetherOverEthernet <Boolean>]
 [-BetterTogetherOverEthernetPairingMode <String>] [-LocalProvisioningServerUser <String>]
 [-LocalProvisioningServerPassword <String>] [-LocalProvisioningServerAddress <String>]
 [-LocalProvisioningServerType <String>] [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
IP phone policies are applied each time a user accesses the system via an IP phone device. The Set-CsIPPhonePolicy cmdlet enables you to modify the global IP phone policy that has been configured in your organization.


## EXAMPLES

### Example 1
```
Set-CsIPPhonePolicy -UserDialTimeoutMS 10000
```

This example modifies the global IP phone policy UserDialTimeoutMS parameter to 10 seconds (10000 ms).

### Example 2
```
Set-CsIPPhonePolicy -EnablePowerSaveMode $False -EnableOneTouchVoicemail $False -EnableDeviceUpdate $False
```

This example sets the EnablePowerSaveMode, EnableOneTouchVoicemail and EnableDeviceUpdate parameters to $false.

## PARAMETERS

### -BetterTogetherOverEthernetPairingMode

> Applicable: Skype for Business Online, Skype for Business Server 2019

Valid values are:
Auto - The phone will get paired with BTOE app Automatically and no need for the user to enter the pairing code.
Manual - The user needs to enter the pairing code manually to pair with the BTOE app.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Manual
Accept pipeline input: False
Accept wildcard characters: False
```

### -DateTimeFormat

> Applicable: Skype for Business Online, Skype for Business Server 2019

Specifies the time format to be used. The acceptable values are "24" for a 24 hour time format, or "12" for a 12 hour format. The default is "24".

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableBetterTogetherOverEthernet

> Applicable: Skype for Business Online, Skype for Business Server 2019

Specifies whether the Better Together Over Ethernet (BTOE) feature is enabled for users. If $true, and if the BTOE plugin is installed on the IP device, the user can tether the device to a PC and sign in to Skype for Business. The default is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableDeviceUpdate

> Applicable: Skype for Business Online, Skype for Business Server 2019

Specifies whether the IP device will be updated by the Skype for Business service. If set to $true, IP devices will get firmware updates from the service, if $false the device will not be updated. The default is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableExchangeCalendaring

> Applicable: Skype for Business Online, Skype for Business Server 2019

Specifies whether an IP device is enabled to connect to the Exchange Online calendaring service. If $true, users are able to connect to their Exchange calendars. If $false, users will not be able to connect to their calendars. The default is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableOneTouchVoicemail

> Applicable: Skype for Business Online, Skype for Business Server 2019

Specifies whether the Visual Voicemail feature in Skype for Business Online is enabled. If set to $true, the feature is enabled, otherwise $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnablePowerSaveMode

> Applicable: Skype for Business Online, Skype for Business Server 2019

If enabled, phone goes to power saving mode (display turns off) based on values of the PowerSaveDuringOfficeHoursTimeoutMS and PowerSavePostOfficeHoursTimeoutMS parameters.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Skype for Business Online, Skype for Business Server 2019

The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Skype for Business Online, Skype for Business Server 2019

This parameter is reserved for internal Microsoft use.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance

> Applicable: Skype for Business Online, Skype for Business Server 2019

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeyboardLockMaxPinRetry

> Applicable: Skype for Business Online, Skype for Business Server 2019

Specifies the maximum number of retries allowed for phone unlock. The default is 5.

```yaml
Type: UInt64
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalProvisioningServerAddress

> Applicable: Skype for Business Online, Skype for Business Server 2019

Specifies the address of the provisioning server for your organization.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalProvisioningServerPassword

> Applicable: Skype for Business Online, Skype for Business Server 2019

Specifies the password for the provisioning server.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalProvisioningServerType

> Applicable: Skype for Business Online, Skype for Business Server 2019

Specifies the server type for the phone. The default is FTP.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalProvisioningServerUser

> Applicable: Skype for Business Online, Skype for Business Server 2019

Specifies a username for the provisioning server.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerSaveDuringOfficeHoursTimeoutMS

> Applicable: Skype for Business Online, Skype for Business Server 2019

Specifies the time in milliseconds to wait during office hours before turning on Power Save mode. The default is 900,000.

```yaml
Type: UInt64
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerSavePostOfficeHoursTimeoutMS

> Applicable: Skype for Business Online, Skype for Business Server 2019

Specifies the time in milliseconds to wait after office hours before turning on Power Save mode. The default is 300,000.

```yaml
Type: UInt64
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrioritizedCodecsList

> Applicable: Skype for Business Online, Skype for Business Server 2019

Specifies the order in which to prioritize codecs. The default is: "G722_8000;PCMU;PCMA;G729"

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

> Applicable: Skype for Business Online, Skype for Business Server 2019

This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserDialTimeoutMS

> Applicable: Skype for Business Online, Skype for Business Server 2019

Specifies the time in milliseconds to wait in On-Hook mode before dialing out automatically. If a user enters a phone number and does not click Dial, the system will dial the number after the number of milliseconds specified. The default is 5000.

```yaml
Type: UInt64
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Skype for Business Online, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Skype for Business Online, Skype for Business Server 2019

System.Management.Automation.SwitchParameter

The WhatIf switch causes the command to simulate its results. By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.ADConnect.Schema.ADUser
Microsoft.Rtc.Management.ADConnect.Schema.ADUser

## OUTPUTS

### Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact
The `Set-CsIPPhonePolicy` cmdlet does not return a value or object. However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact object.

## NOTES

## RELATED LINKS
