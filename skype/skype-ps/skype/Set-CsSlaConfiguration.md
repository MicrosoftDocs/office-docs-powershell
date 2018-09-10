---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsSlaConfiguration
schema: 2.0.0
---

# Set-CsSlaConfiguration

## SYNOPSIS
You can use Set-CsSlaConfiguration to create a new Shared Line Appearance (SLA) group or modify an existing one. SLA is an Enterprise Voice user that is capable of receiving multiple calls at a time and forwarding them to its delegates, who answer the call. This cmdlet was introduced in Skype for Business Server 2015, November 2015 Cumulative Update.

## SYNTAX

```
Set-CsSlaConfiguration [-BusyOption <SlaBusyOption>] [-Target <Uri>]
 [-MissedCallOption <SlaUserMissedCallOption>] [-MissedCallForwardTarget <Uri>] [-MaxNumberOfCalls <UInt32>]
 [-Identity] <UserIdParameter> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Shared Line Appearance (SLA) is a feature in Skype for Business (SfB) for handling multiple calls on a specific number called a shared number. SLA can configure any enterprise voice enabled SfB user as a shared number with multiple lines to respond to multiple calls. The calls are not actually received on the shared number, instead they are forwarded to users that act as delegates for the shared number. Any one of the delegates can pick up the call while the rest of the delegates get a notification on their phone about who picked up the call and which line has become busy as a result. Both the number of lines and the delegates are configurable for a shared number in SLA. In addition, advanced options such as BusyOption (what happens in a situation when all lines are busy) and MissedCallOption (the case in which none of the delegates pick up a call) etc. can also be configured for a shared number. 

The Set-CsSlaConfiguration cmdlet modifies the properties of an SLA configuration.

Note: Logging in with the account created for the SLA number is not supported. Using the SLA number account with any device or Desktop Client can result in unpredictable behavior. It is not necessary to use that account for the Shared Line Appearance feature to function. By default, members of the RTCUniversalServerAdmins group are authorized to run the Set-CsSlaConfiguration cmdlet. To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsSlaConfiguration"}

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Set-CsSlaConfiguration -Identity SLAGroup1 -MaxNumberOfCalls 3 -BusyOption BusyOnBusy
```

This example creates an SLA group for an existing Enterprise Voice user, SLAGroup1, and uses the number assigned for SLAGroup1 as the SLA mainline number. Also It sets the maximum number of concurrent calls for the new SLA group to 3, and for calls in excess of that to hear a busy signal.

### -------------------------- Example 2 --------------------------
```
PS C:\> Set-CsSlaConfiguration -Identity SLAGroup1 -BusyOption Forward -Target tel:+2025551234
```

This example sets calls that exceed the maximum number of concurrent calls to be forwarded to the telephone number 202-555-1234.

### -------------------------- Example 3 --------------------------
```
PS C:\> Set-CsSlaConfiguration -Identity SLAGroup1 -MissedCallOption Forward -MissedCallForwardTarget sip:sla_forward_number@contoso.com -BusyOption Forward -MaxNumberOfCalls 2 -Target sip:sla_forward_number@contoso.com
```

This example specifies that missed calls to be forwarded to the user named sla_forward_number and calls that exceed the maximum number of concurrent calls to be forwarded to the same user.

## PARAMETERS

### -Identity
Indicates the Identity of the SLA group to be created or modified. User Identities can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer). You can also reference a user account by using the Active Directory distinguished name.

You can use the asterisk (\*) wildcard character when using the Display Name as the user Identity. For example, the Identity "\*Smith" returns all the users who have a display name that ends with the string value "Smith".

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -BusyOption
Specifies the action to take when the SLA group exceeds the maximum number of simultaneous calls. Possible values are:
* Forward
* BusyOnBusy
* Voicemail

```yaml
Type: SlaBusyOption
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxNumberOfCalls
Sets the maximum number of concurrent calls to be allowed in the SLA group.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -MissedCallForwardTarget
Specifies the sip address of a user account or a telephone number to forward the call when you select `Forward` in the `MissedCallOption` parameter. The target could be a user in your organization or a phone number following next sintax:
* tel:\<PhoneNumber\>
* sip:\<NameofDelegate@domain\>

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -MissedCallOption
Specifies the action to take when the SLA group delegates do not answer a call. Possible values are:
* Disconnect
* Forward
* BusySignal
* Voicemail

```yaml
Type: SlaUserMissedCallOption
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a user object through the pipeline that represents the SLA group being created or modified. By default, the Set-CsSlaConfiguration cmdlet does not pass objects through the pipeline.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Target
Specifies the sip address of a user account or a telephone number to forward the call when you select `Forward` in the `BusyOption` parameter. The target could be a user in your organization or a phone number following next sintax:
* tel:\<PhoneNumber\>
* sip:\<NameofDelegate@domain\>

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
[Get-CsSlaConfiguration](https://docs.microsoft.com/en-us/powershell/module/skype/get-csslaconfiguration?view=skype-ps)

[Remove-CsSlaConfiguration](https://docs.microsoft.com/en-us/powershell/module/skype/remove-csslaconfiguration?view=skype-ps)

