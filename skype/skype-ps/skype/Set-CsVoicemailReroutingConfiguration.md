---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsVoicemailReroutingConfiguration
schema: 2.0.0
---

# Set-CsVoicemailReroutingConfiguration

## SYNOPSIS
Modifies settings that provide public switched telephone network (PSTN) phone numbers to access Exchange Subscriber Access and Auto Attendant features.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsVoicemailReroutingConfiguration [[-Identity] <XdsIdentity>] [-AutoAttendantNumber <String>]
 [-Enabled <Boolean>] [-SubscriberAccessNumber <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsVoicemailReroutingConfiguration [-Instance <PSObject>] [-AutoAttendantNumber <String>]
 [-Enabled <Boolean>] [-SubscriberAccessNumber <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet allows you to modify settings that determine where Auto Attendant and Subscriber Access calls are rerouted to when IP connectivity to an Exchange server is lost.

Auto Attendant and Subscriber Access are features of Exchange.
The Auto Attendant feature provides voice recognition and touch-tone control (dual-tone multifrequency, or DTMF) for outside callers to navigate a company's phone system to reach the desired department or employee or, in Message Taking Mode, to accept messages for users.
(Voice rerouting for Message Taking Mode is recommended.) Subscriber Access allows internal users to access their Microsoft Outlook mailbox from a phone.
The numbers provided by these settings allow callers to leave voice mail messages for Enterprise Voice users (the AutoAttendantNumber setting) and for those users to retrieve voice mail even if the IP connectivity from the Skype for Business Server deployment at a remote site to Exchange in the data center is unavailable (the SubscriberAccessNumber setting).

Note that these settings are not available unless the Enabled property has been set to True.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsVoicemailReroutingConfiguration -Identity site:Redmond1 -Enabled $True
```

This example enables the voice mail rerouting configuration settings for the site Redmond1.


### -------------------------- Example 2 --------------------------
```
Set-CsVoicemailReroutingConfiguration -Identity site:Redmond1 -SubscriberAccessNumber "+14255551213"
```

This example modifies the voice mail rerouting settings that apply to the site Redmond1, setting the phone number for Subscriber Access to +14255551213.


## PARAMETERS

### -Identity
The unique identifier of the configuration you want to modify.
For this cmdlet the Identity will be either Global or Site:\<site name\>, where \<site name\> is the name of the site to which the settings are applied.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

This object must be of type Microsoft.Rtc.Management.WritableConfig.Settings.ExumRouting.VoicemailReroutingConfiguration (which can be retrieved by calling the `Get-CsVoicemailReroutingConfiguration` cmdlet).


```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AutoAttendantNumber
Phone number of the Auto Attendant to which the voice mail deposit attempts should be re-routed.

The number supplied to this parameter must be a LineUri of an existing contact object.

Value must be a number beginning with a digit 1 through 9, optionally preceded by a plus (+), followed by any number of digits.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
Indicates whether attempts to access voice mail should be re-routed through PSTN when IP connectivity is down.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubscriberAccessNumber
Subscriber Access number to which the voice mail retrieval attempts should be re-routed.

The number supplied to this parameter must be a LineUri of an existing contact object.

Value must be a number beginning with a digit 1 through 9, optionally preceded by a plus (+), followed by any number of digits.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Microsoft.Rtc.Management.WritableConfig.Settings.ExumRouting.VoicemailReroutingConfiguration object.
Accepts pipelined input of voice mail rerouting configuration objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It modifies an object of type Microsoft.Rtc.Management.WritableConfig.Settings.ExumRouting.VoicemailReroutingConfiguration.

## NOTES

## RELATED LINKS

[New-CsVoicemailReroutingConfiguration]()

[Remove-CsVoicemailReroutingConfiguration]()

[Get-CsVoicemailReroutingConfiguration]()
