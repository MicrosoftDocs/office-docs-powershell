---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/get-csmeetingmigrationstatus
applicable: Skype for Business Online
title: Get-CsMeetingMigrationStatus
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsMeetingMigrationStatus

## SYNOPSIS
You use the `Get-CsMeetingMigrationStatus` cmdlet to check the status of meeting migrations.

## SYNTAX
```
Get-CsMeetingMigrationStatus [[-Identity] <UserIdParameter>] [-Confirm] [-EndTime <DateTime>] [-StartTime <DateTime>]
 [-SummaryOnly] [-Tenant <Guid>] [-WhatIf] [-State <StateType>] [<CommonParameters>]
```

## DESCRIPTION
Meeting Migration Service (MMS) is a Skype for Business service that runs in the background and automatically updates Skype for Business and Microsoft Teams meetings for users. MMS is designed to eliminate the need for users to run the Meeting Migration Tool to update their Skype for Business and Microsoft Teams meetings.

You can use the `Get-CsMeetingMigrationStatus` cmdlet to check the status of meeting migrations.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsMeetingMigrationStatus -SummaryOnly
```

This example is used to get a summary status of all MMS migrations.

### -------------------------- Example 2 --------------------------
```
Get-CsMeetingMigrationStatus -Identity "ashaw@contoso.com"
```

This example gets the meeting migration status for user ashaw@contoso.com.


## PARAMETERS

### -Identity
Specifies the Identity of the user account to be to be modified. A user identity can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer) and 4) the user's Active Directory display name (for example, Ken Myer). You can also reference a user account by using the user's Active Directory distinguished name.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing and requires confirmation to proceed.

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

### -StartTime
Specifies the start date of the date range.

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
Specifies the end date of the date range.

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

### -SummaryOnly
Specified that you want a summary status of MMS migrations returned.

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

### -Tenant
Globally unique identifier (GUID) of the tenant account whose external user communication policy are being created. For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter. Instead, the tenant ID will automatically be filled in for you based on your connection information. The Tenant parameter is primarily for use in a hybrid deployment.

```yaml
Type: Guid
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

### -State
With this parameter you can filter by migration state. Possible values are:
* Pending
* InProgress
* Failed
* Succeeded

```yaml
Type: StateType
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
[Get-CsTenantMigrationConfiguration](https://docs.microsoft.com/powershell/module/skype/get-cstenantmigrationconfiguration?view=skype-ps)

[Get-CsOnlineDialInConferencingTenantSettings](https://docs.microsoft.com/powershell/module/skype/get-csonlinedialinconferencingtenantsettings?view=skype-ps)

[Start-CsExMeetingMigration](https://docs.microsoft.com/powershell/module/skype/start-csexmeetingmigration?view=skype-ps)
