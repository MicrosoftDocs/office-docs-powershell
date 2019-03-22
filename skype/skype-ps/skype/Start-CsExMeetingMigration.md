---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
applicable: Skype for Business Online
title: Start-CsExMeetingMigration
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Start-CsExMeetingMigration

## SYNOPSIS
This cmdlet manually trigger a meeting migration request for the specified user.

## SYNTAX

```
Start-CsExMeetingMigration [-SourceMeetingType <MmsSourceMeetingTypes>] [-TargetMeetingType <MmsTargetMeetingTypes>]
 [-Tenant <Guid>] [-Identity] <UserIdParameter> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet manually trigger a meeting migration request for the specified user.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Start-CsExMeetingMigration -Identity ashaw@contoso.com -TargetMeetingType Teams
```

This example below shows how to initiate meeting migration for user ashaw@contoso.com so that all meetings are migrated to Teams.


## PARAMETERS

### -Identity
Specifies the Identity of the user account to be to be modified. A user identity can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer) and 4) the user's Active Directory display name (for example, Ken Myer). You can also reference a user account by using the user's Active Directory distinguished name.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
[Using the Meeting Migration Service (MMS)](https://docs.microsoft.com/SkypeForBusiness/audio-conferencing-in-office-365/setting-up-the-meeting-migration-service-mms)

[Get-CsMeetingMigrationStatus](https://docs.microsoft.com/powershell/module/skype/get-csmeetingmigrationstatus)

[Set-CsTenantMigrationConfiguration](https://docs.microsoft.com/powershell/module/skype/set-cstenantmigrationconfiguration)

[Get-CsTenantMigrationConfiguration](https://docs.microsoft.com/powershell/module/skype/get-cstenantmigrationconfiguration)



