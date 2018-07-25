---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsSlaConfiguration
schema: 2.0.0
---

# Remove-CsSlaConfiguration

## SYNOPSIS
Use the Remove-CsSlaConfiguration cmdlet to remove a Shared Line Appearance (SLA) configuration. SLA is an Enterprise Voice user that is capable of receiving multiple calls at a time and forwarding them to its delegates, who answer the call.

## SYNTAX

```
Remove-CsSlaConfiguration [-Identity] <UserIdParameter> [-Confirm] [-PassThru] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Shared Line Appearance (SLA) is a feature in Skype for Business (SfB) for handling multiple calls on a specific number called a shared number. SLA can configure any enterprise voice enabled SfB user as a shared number with multiple lines to respond to multiple calls. The calls are not actually received on the shared number, instead they are forwarded to users that act as delegates for the shared number. Any one of the delegates can pick up the call while the rest of the delegates get a notification on their phone about who picked up the call and which line has become busy as a result. Both the number of lines and the delegates are configurable for a shared number in SLA. In addition, advanced options such as BusyOption (what happens in a situation when all lines are busy) and MissedCallOption (the case in which none of the delegates pick up a call) etc. can also be configured for a shared number. 

The Remove-CsSlaConfiguration cmdlet removes a SLA configuration. 

Note: Logging in with the account created for the SLA number is not supported. Using the SLA number account with any device or Desktop Client can result in unpredictable behavior. It is not necessary to use that account for the Shared Line Appearance feature to function. By default, members of the RTCUniversalServerAdmins group are authorized to run the Remove-CsSlaConfiguration cmdlet. To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsSlaConfiguration"}

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Remove-CsSlaConfiguration -Identity SLAGroup1 
```

This example removes the Shared Line Appearance configuration named "SLAGroup1".


## PARAMETERS

### -Identity
Indicates the Identity of the SLA group to be removed. User Identities can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer). You can also reference a user account by using the Active Directory distinguished name.

You can use the asterisk (\*) wildcard character when using the Display Name as the user Identity. For example, the Identity "Smith" returns all the users who have a display name that ends with the string value "\*Smith".

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

### -PassThru
Enables you to pass a user object through the pipeline that represents the SLA group being removed. By default, the Remove-CsSlaConfiguration cmdlet does not pass objects through the pipeline.

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

[Set-CsSlaConfiguration](https://docs.microsoft.com/en-us/powershell/module/skype/set-csslaconfiguration?view=skype-ps)
