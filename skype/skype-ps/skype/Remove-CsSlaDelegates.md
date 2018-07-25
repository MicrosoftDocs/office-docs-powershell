---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsSlaDelegates
schema: 2.0.0
---

# Remove-CsSlaDelegates

## SYNOPSIS
Use the 'Remove-CsSlaDelegates' cmdlet to remove a delegate from a shared number in Shared Line Appearance (SLA). A shared number in SLA is an Enterprise Voice user that is capable of receiving multiple calls at a time and forwarding them to its delegates, who answer the call. This cmdlet was introduced in Skype for Business Server 2015, November 2015 Cumulative Update.

## SYNTAX

```
Remove-CsSlaDelegates [-Identity] <UserIdParameter> -Delegate <Uri> [-Confirm] [-PassThru] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
SLA is a feature in Skype for Business (SfB) for handling multiple calls on a specific number called a shared number. SLA can configure any enterprise voice enabled SfB user as a shared number with multiple lines to respond to multiple calls. The calls are not actually received on the shared number, instead they are forwarded to users that act as delegates for the shared number. Any one of the delegates can pick up the call while the rest of the delegates get a notification on their phone about who picked up the call and which line has become busy as a result. Both the number of lines and the delegates are configurable for a shared number in SLA. In addition, advanced options such as BusyOption (what happens in a situation when all lines are busy) and MissedCallOption (the case in which none of the delegates pick up a call) can also be configured for a shared number.

The Remove-CsSlaDelegates cmdlet provides a way to remove a delegate from a shared number in Shared Line Appearance (SLA).

NOTE: Logging in with the account created for the SLA number is not supported. Using the SLA number account with any device or Desktop Client can result in unpredictable behavior. It is not necessary to use that account for the Shared Line Appearance feature to function.

By default, members of the RTCUniversalServerAdmins group are authorized to run the Remove-CsSlaDelegates. To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsSlaDelegates"}

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Remove-CsSlaDelegates -Identity SLAGroup1 -Delegate sip:SLA_Delegate3@contoso.com
```

This example removes SLA_Delegate3@contoso.com as delegate in SLA group named SLAGroup1.


## PARAMETERS

### -Delegate
Specifies the delegate to be removed from the SLA group. This parameter requires a valid sip address.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Identity
Indicates the identity of the shared number to which the delegate will be removed. User identities can be specified using one of five formats:

SIP address
Example: sip:kenmyer@litwareinc.com
User principal name (UPN)
Example: kenmyer@litwareinc.com
Domain name and logon name in the form domain\logon
Example: litwareinc\kenmyer
Active Directory display name (this form typically requires quotes)
Example: "Ken Myer"
Active Directory distinguished name
Example: CN=KenMyer,CN=Users,DC=Atlanta,DC=Corp,DC=litware,DC=com

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
The presence of the passthru switch causes the cmdlet to pass the current objects through the pipeline.

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
[Add-CsSlaDelegates](https://docs.microsoft.com/en-us/powershell/module/skype/add-cssladelegates?view=skype-ps)
