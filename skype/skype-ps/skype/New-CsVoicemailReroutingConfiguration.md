---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsVoicemailReroutingConfiguration
schema: 2.0.0
---

# New-CsVoicemailReroutingConfiguration

## SYNOPSIS
Creates settings that, when enabled, provide phone numbers that Skype for Business Server routes to over public switched telephone network (PSTN) if IP connectivity from Skype for Business Server in the branch site to the Exchange Server located in the data center is not available.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
New-CsVoicemailReroutingConfiguration [-Identity] <XdsIdentity> [-AutoAttendantNumber <String>]
 [-Enabled <Boolean>] [-SubscriberAccessNumber <String>] [-Force] [-InMemory] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet allows you to create settings that are applied at either the global or site level that determine where Auto-Attendant and Subscriber Access calls are rerouted to over PSTN when IP connectivity is lost.

Auto-Attendant and Subscriber Access are features of Exchange.
The Auto-Attendant feature provides voice recognition and touch-tone control (dual-tone multifrequency, or DTMF) for outside callers to navigate a company's phone system to reach the department or employee that they want or, in Message Taking Mode, to accept messages for users.
(Voice rerouting for Message Taking Mode is recommended.) Subscriber Access allows internal users to access their Microsoft Outlook mailbox from a phone.
The numbers provided by these settings allow callers to leave voice mail messages for Enterprise Voice users (the AutoAttendantNumber setting) and for those users to retrieve voice mail even if the IP connectivity from the Skype for Business Server deployment at a remote site to Exchange in the data center is unavailable (the SubscriberAccessNumber setting).

Note that these settings are not available unless the Enabled property has been set to True.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-CsVoicemailReroutingConfiguration -Identity site:Redmond1 -Enabled $True -AutoAttendantNumber "+14255551212"
```

This example creates new voice mail rerouting settings that apply to the site Redmond1.
The Enabled parameter is set to True to turn on this configuration and a phone number (+14255551212) is supplied to specify the Auto-Attendant to which calls will be rerouted.


### -------------------------- Example 2 --------------------------
```
New-CsVoicemailReroutingConfiguration -Identity site:Redmond1 -SubscriberAccessNumber "+14255551213"
```

This example creates new voice mail rerouting settings that apply to the site Redmond1.
A phone number (+14255551213) is supplied to specify the Subscriber Access number to which calls will be rerouted.
Notice that the Enabled parameter has not been set.
Enabled is set to False by default, so Subscriber Access calls will not be rerouted to this number until the Enabled property is set to True.


## PARAMETERS

### -Identity
This parameter contains a unique identifier specifying the scope at which this configuration is applied.
New voice mail rerouting configurations can be created only at the site level, so the Identity would be in the format Site:\<site name\>, where \<site name\> is the name of the site to which the settings are applied.
A global voice mail rerouting configuration exists by default and cannot be re-created by calling the `New-CsVoicemailReroutingConfiguration` cmdlet.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoAttendantNumber
Phone number of the Auto-Attendant to which the voice mail deposit attempts should be re-routed.

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

Default: False

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

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.


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
None.

## OUTPUTS

###  
Creates an object of type Microsoft.Rtc.Management.WritableConfig.Settings.ExumRouting.VoicemailReroutingConfiguration.

## NOTES

## RELATED LINKS

[Remove-CsVoicemailReroutingConfiguration](Remove-CsVoicemailReroutingConfiguration.md)

[Set-CsVoicemailReroutingConfiguration](Set-CsVoicemailReroutingConfiguration.md)

[Get-CsVoicemailReroutingConfiguration](Get-CsVoicemailReroutingConfiguration.md)
