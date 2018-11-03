---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsUserSession
schema: 2.0.0
---

# Get-CsUserSession

## SYNOPSIS
Use the Get-CsUserSession cmdlet to retrieve user session information within a specified date range within the past 30 days.

## SYNTAX

```
Get-CsUserSession -StartTime <DateTimeOffset> -User <String> [-EndTime <DateTimeOffset>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Use the Get-CsUserSession cmdlet to retrieve session information for users within a specified date range within the past 30 days.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}`

## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
Get-CsUserSession -User "Ken.Myer@Contoso.com" -StartTime "02/22/2016 07:30:15 PM"
```

This example returns user session information for Ken Myer from "02/22/2016 07:30:15 PM" to the current date.

## PARAMETERS

### -StartTime
Specifies the start date, time and offset of the date range.

```yaml
Type: DateTimeOffset
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
Specifies the user whose session data will be retrieved.
The input format is any form of user URI defined in Skype for Business Online.
For instance: `-User "Ken.Myer@Contoso.com"`.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndTime
Specifies the end date, time and offset of the date range.

```yaml
Type: DateTimeOffset
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
Indicates that this cmdlet runs as a background job.

When you specify the AsJob parameter, the command immediately returns an object that represents the background job. You can continue to work in the session while the job finishes. The job is created on the local computer and the results from the Skype for Business Online session are automatically returned to the local computer. To get the job results, use the Receive-Job cmdlet.

For more information about Windows PowerShell background jobs, see [about_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_jobs?view=powershell-6) and [about_Remote_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_remote_jobs?view=powershell-6).

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

