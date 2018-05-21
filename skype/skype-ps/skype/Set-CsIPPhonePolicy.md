---
external help file: 
applicable: Skype for Business Online
title: Set-CsIPPhonePolicy
schema: 2.0.0
---

# Set-CsIPPhonePolicy

## SYNOPSIS
Use the Set-CsIPPhonePolicy cmdlet to modify the settings of the Skype for Business Online global IP phone policy. IP phone policies define the Skype for Business Online features that are available to users.

## SYNTAX

```
Set-CsIPPhonePolicy [[-Identity] <Object>] [-BetterTogetherOverEthernetPairingMode <Object>]
 [-BypassDualWrite <Object>] [-Confirm] [-DateTimeFormat <Object>] [-EnableBetterTogetherOverEthernet <Object>]
 [-EnableDeviceUpdate <Object>] [-EnableExchangeCalendaring <Object>] [-EnableOneTouchVoicemail <Object>]
 [-EnablePowerSaveMode <Object>] [-Force] [-Instance <Object>] [-KeyboardLockMaxPinRetry <Object>]
 [-LocalProvisioningServerAddress <Object>] [-LocalProvisioningServerPassword <Object>]
 [-LocalProvisioningServerType <Object>] [-LocalProvisioningServerUser <Object>]
 [-PowerSaveDuringOfficeHoursTimeoutMS <Object>] [-PowerSavePostOfficeHoursTimeoutMS <Object>]
 [-PrioritizedCodecsList <Object>] [-Tenant <Object>] [-UserDialTimeoutMS <Object>] [-WhatIf] [-AsJob]
 [<CommonParameters>]
```

## DESCRIPTION
IP phone policies are applied each time a user accesses the system via an IP phone device. The Set-CsIPPhonePolicy cmdlet enables you to modify the global IP phone policy that has been configured in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsIPPhonePolicy -UserDialTimeoutMS 10000
```

This example modifies the global IP phone policy UserDialTimeoutMS parameter to 10 seconds (10000 ms).

### -------------------------- Example 2 --------------------------
```
Set-CsIPPhonePolicy -EnablePowerSaveMode $False -EnableOneTouchVoicemail $False -EnableDeviceUpdate $False
```

This example sets the EnablePowerSaveModeproperty, EnableOneTouchVoicemailvalues, and EnableDeviceUpdate parameters to $false.

## PARAMETERS

### -BetterTogetherOverEthernetPairingMode
System.String

Auto – The phone will get paired with BTOE app Automatically and no need for the user to enter the pairing code. Manual – The user needs to enter the pairing code manually to pair with the BTOE app. 

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
{{Fill BypassDualWrite Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
System.Management.Automation.SwitchParameter

Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DateTimeFormat
System.Int32

Specifies the time format to be used. The acceptable values are "24" for a 24 hour time format, or "12" for a 12 hour format. The default is "24".

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableBetterTogetherOverEthernet
System.Boolean

Specifies whether the Better Together Over Ethernet (BTOE) feature is enabled for users. If $true, and if the BTOE plugin is installed on the IP device, the user can tether the device to a PC and sign in to Skype for Business Online. The default is $true.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableDeviceUpdate
System.Boolean

Specifies whether the IP device will be updated by the Skype for Business Online service. If set to $true, IP devices will get firmware updates from the service, if $false the device will not be updated. The default is $true.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableExchangeCalendaring
System.Boolean

Specifies whether an IP device is enabled to connect to the Exchange Online calendaring service. If $true, users are able to connect to their Exchange calendars. If $false, users will not be enabled to connect to their calendars. The default is $true.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableOneTouchVoicemail
System.Boolean

Specifies whether the Visual Voicemail feature in Skype for Business Online is enabled. If set to $true, the feature is enabled, otherwise $false.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnablePowerSaveMode
System.Boolean

If enabled, phone goes to power savings mode (display turns off) based on values of the PowerSaveDuringOfficeHoursTimeoutMS and PowerSavePostOfficeHoursTimeoutMS parameters.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
System.Management.Automation.SwitchParameter

The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Microsoft.Rtc.Management.Xds.XdsIdentity

This parameter is reserved for internal Microsoft use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
System.Management.Automation.PSObject

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeyboardLockMaxPinRetry
System.UInt64

Specifies the maximum number of retries allowed for phone unlock. The default is 5.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalProvisioningServerAddress
System.String

Specifies the address of the provisioning server for your organization. 

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalProvisioningServerPassword
System.String

Specifies the password for the provisioning server. 

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalProvisioningServerType
System.String

Specifies the server type for the phone. The default is FTP.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalProvisioningServerUser
System.String

Specifies a username for the provisioning server.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerSaveDuringOfficeHoursTimeoutMS
System.UInt64

Specifies the time in milliseconds to wait during office hours before turning on Power Save mode. The default is 900,000.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerSavePostOfficeHoursTimeoutMS
System.UInt64

Specifies the time in milliseconds to wait after office hours before turning on Power Save mode. The default is 300,000.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrioritizedCodecsList
System.String

Specifies the order in which to prioritize codecs. The default is: "G722_8000;PCMU;PCMA;G729"

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
System.Guid

This parameter is reserved for internal Microsoft use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserDialTimeoutMS
System.UInt64

Specifies the time in milliseconds to wait in On-Hook mode before dialing out automatically. If a user enters a phone number and does not click dial, the system will dial the number after the number of milliseconds specified. The default is 5000. 

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
System.Management.Automation.SwitchParameter

The WhatIf switch causes the command to simulate its results. By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### 
System.Management.Automation.PSObject

Microsoft.Rtc.Management.ADConnect.Schema.ADUser

## OUTPUTS

### System.Object
By default, the Grant-CsIPPhonePolicy cmdlet returns no objects or values. However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact object.

## NOTES

## RELATED LINKS

