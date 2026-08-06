---
applicable: Microsoft Teams
author: officedocspr
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: odocspr
online version: https://learn.microsoft.com/powershell/module/microsoftteams/remove-csphonenumberassignment
schema: 2.0.0
title: Remove-CsPhoneNumberAssignment
---

# Remove-CsPhoneNumberAssignment

## SYNOPSIS
Removes or unassigns a phone number from a user or resource account (online application instance).

## SYNTAX

### RemoveSome (Default)
```
Remove-CsPhoneNumberAssignment -Identity <String> -TelephoneNumber <String> -NumberType <String>
 [-HttpPipelinePrepend <SendAsyncStep[]>] [-Notify] [-AssignmentBlockedForever] [-AssignmentBlockedDays <Integer>] [<CommonParameters>]
```

### RemoveAll
```
Remove-CsPhoneNumberAssignment -Identity <String> [-HttpPipelinePrepend <SendAsyncStep[]>] [-RemoveAll]
 [-Notify] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes or unassigns a phone number from a user or resource account. The phone number continues to be available in the tenant unless you block assignment by using AssignmentBlockedForever or AssignmentBlockedDays.

Unassigning a phone number from a user or resource account automatically sets EnterpriseVoiceEnabled to False.

If the cmdlet executes successfully, no result object is returned. If the cmdlet fails for any reason, a result object is returned that contains a Code string parameter and a Message string parameter with additional details about the failure. Email notification to the end user is a best-effort operation. No error message is displayed if the email fails to send.


**Note**: In Teams PowerShell module 4.2.1-preview and later, the cmdlet reports errors differently. Instead of returning a result object, the cmdlet generates an exception and appends it to the $Error automatic variable. The cmdlet also supports the ErrorAction parameter to control execution after an error occurs.

## EXAMPLES

### Example 1
```powershell
Remove-CsPhoneNumberAssignment -Identity user1@contoso.com -TelephoneNumber +12065551234 -NumberType CallingPlan
```
This example removes or unassigns the Microsoft Calling Plan telephone number +1 (206) 555-1234 from the user user1@contoso.com.

### Example 2
```powershell
Remove-CsPhoneNumberAssignment -Identity user2@contoso.com -RemoveAll
```
This example removes or unassigns all telephone numbers from user2@contoso.com.

### Example 3
```powershell
Remove-CsPhoneNumberAssignment -Identity user1@contoso.com -TelephoneNumber +12065551234 -NumberType CallingPlan -Notify
```
This example removes or unassigns the Microsoft Calling Plan phone number +1 (206) 555-1234 from the user user1@contoso.com and sends an email notification to the user about the removal.

### Example 4
```powershell
Remove-CsPhoneNumberAssignment -Identity user2@contoso.com -RemoveAll -Notify
```
This example removes or unassigns all telephone numbers from user2@contoso.com and sends an email notification to the user about the change.

### Example 5
```powershell
Remove-CsPhoneNumberAssignment -Identity user1@contoso.com -TelephoneNumber +12065551234 -NumberType CallingPlan -AssignmentBlockedForever
```
This example removes a telephone number assignment from user1@contoso.com and sets an assignment block on the unassigned number for an indefinite duration.

### Example 6
```powershell
Remove-CsPhoneNumberAssignment -Identity user1@contoso.com -TelephoneNumber +12065551234 -NumberType CallingPlan -AssignmentBlockedDays 30
```
This example removes a telephone number assignment from user1@contoso.com and sets an assignment block on the unassigned number for 30 days. The telephone number isn't available for new assignment for 30 days or until the block is removed manually. The telephone number automatically becomes available for assignment after the 30-day period ends.

## PARAMETERS

### -HttpPipelinePrepend
Specifies SendAsync pipeline steps to prepend to the generated HTTP pipeline.

```yaml
Type: Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Runtime.SendAsyncStep[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The identity of the specific user or resource account. You can specify the ObjectId, SipProxyAddress, or UserPrincipalName attribute of the user or resource account.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TelephoneNumber
The phone number to unassign from the user or resource account. Supports E.164 and non-E.164 formats. The phone number can't have a "tel:" prefix.

```yaml
Type: System.String
Parameter Sets: RemoveSome
Aliases: PhoneNumber

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberType
The type of phone number to unassign from the user or resource account. The supported values are DirectRouting, CallingPlan, and OperatorConnect.

```yaml
Type: System.String
Parameter Sets: RemoveSome
Aliases: PhoneNumberType

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveAll
Unassigns all phone numbers from the user or resource account.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: RemoveAll
Aliases:

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Notify
Sends a best-effort email notification when a phone number is removed. Failures to send email are not reported.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentBlockedForever
Sets an indefinite block on assignment for the telephone number.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentBlockedDays
Sets a duration-based assignment block on the telephone number. The value must be an integer from 1 through 365.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```


### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES
The cmdlet is available in Teams PowerShell module 3.0.0 or later. The Notify parameter was introduced in Teams PowerShell module 7.3.0. The AssignmentBlockedForever and AssignmentBlockedDays parameters were introduced in Teams PowerShell module 7.5.0. 

## RELATED LINKS
[Set-CsPhoneNumberAssignment](https://learn.microsoft.com/powershell/module/microsoftteams/set-csphonenumberassignment)

[Get-CsPhoneNumberAssignment](https://learn.microsoft.com/powershell/module/microsoftteams/get-csphonenumberassignment)

[Remove-CsPhoneNumberAssignmentBlock](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csphonenumberassignmentblock)
