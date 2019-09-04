---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
applicable: Skype for Business Online
title: Start-CsExMeetingMigration
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Start-CsExMeetingMigration

## SYNOPSIS
This cmdlet manually trigger a meeting migration request for the specified user.

## SYNTAX

```
Start-CsExMeetingMigration [-SourceMeetingType <MmsSourceMeetingTypes>] [-TargetMeetingType <MmsTargetMeetingTypes>]
 [-Tenant <Guid>] [-Identity] <UserIdParameter> [-WhatIf] [-Confirm] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Meeting Migration Service (MMS) is a Skype for Business service that runs in the background and automatically updates Skype for Business and Microsoft Teams meetings for users.
MMS is designed to eliminate the need for users to run the Meeting Migration Tool to update their Skype for Business and Microsoft Teams meetings.

Also, with `Start-CsExMeetingMigration` cmdlet, you can start a meeting migration manually.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Start-CsExMeetingMigration -Identity ashaw@contoso.com -TargetMeetingType Teams
```

This example below shows how to initiate meeting migration for user ashaw@contoso.com so that all meetings are migrated to Teams.


## PARAMETERS

### -Identity
Specifies the Identity of the user account to be modified. A user identity can be specified by using one of four formats: 
1. The user's SIP address 
2. The user's user principal name (UPN)
3. The user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer)
4. The user's Active Directory display name (for example, Ken Myer). You can also reference a user account by using the user's Active Directory distinguished name.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
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

### -Tenant
This parameter is reserved for internal Microsoft use.

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

### -SourceMeetingType
The possible values are:
* **All:** indicates that both Skype for Business meetings and Teams meetings should be updated. This is the **default value**.
* **SfB:** indicates that only Skype for Business meetings (whether on-premises or online) should be updated.
* **Teams:** indicates that only Teams meetings should be updated.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: All
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetMeetingType
The possible values are:
* **Current:** specifies that Skype for Business meetings remain Skype for Business meetings and Teams meetings remain Teams meetings. However audio conferencing coordinates might be changed, and any on-premises Skype for Business meetings would be migrated to Skype for Business Online. This is the **default value**.
* **Teams:** specifies that any existing meeting must be migrated to Teams, regardless of whether the meeting is hosted in Skype for Business online or on-premises, and regardless of whether any audio conferencing updates are required.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: Current
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
Indicates that this cmdlet runs as a background job.

When you specify the AsJob parameter, the command immediately returns an object that represents the background job.
You can continue to work in the session while the job finishes.
The job is created on the local computer and the results from the Skype for Business Online session are automatically returned to the local computer.
To get the job results, use the Receive-Job cmdlet.

For more information about Windows PowerShell background jobs, see [about_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_jobs?view=powershell-6) and [about_Remote_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_remote_jobs?view=powershell-6).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
[Using the Meeting Migration Service (MMS)](https://docs.microsoft.com/SkypeForBusiness/audio-conferencing-in-office-365/setting-up-the-meeting-migration-service-mms)

[Get-CsMeetingMigrationStatus](https://docs.microsoft.com/powershell/module/skype/get-csmeetingmigrationstatus)

[Set-CsTenantMigrationConfiguration](https://docs.microsoft.com/powershell/module/skype/set-cstenantmigrationconfiguration)

[Get-CsTenantMigrationConfiguration](https://docs.microsoft.com/powershell/module/skype/get-cstenantmigrationconfiguration)



