---
external help file: 
applicable: Skype for Business Online
title: Get-CsUserSession
schema: 2.0.0
---

# Get-CsUserSession

## SYNOPSIS
Use the Get-CsUserSession cmdlet to retrieve user session information within a specified date range.

## SYNTAX

```
Get-CsUserSession [-StartTime <Object>] [-User <Object>] [-EndTime <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Use the Get-CsUserSession cmdlet to retrieve session information for users within a specified date range.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}`

## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
Get-CsUserSession -User "Ken.Myer@Contoso.com" -StartDate "02/22/2016 07:30:15 PM"
```

This example returns user session information for Ken Myer from "02/22/2016 07:30:15 PM" to the current date.

## PARAMETERS

### -StartTime
PARAMVALUE: DateTimeOffset

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

### -User
Specifies the user whose session data will be retrieved.
The input format is any form of user URI defined in Skype for Business Server 2015.
For instance: -User "Ken.Myer@Contoso.com".

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

### -EndTime
PARAMVALUE: DateTimeOffset

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
None.

## OUTPUTS

###  
The Get-CsUserSession cmdlet returns an instance of the Microsoft.Rtc.Management.Hosted.Data.UserSession object.

## NOTES

## RELATED LINKS

