---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-cstenantmigrationconfiguration
schema: 2.0.0
title: Set-CsTenantMigrationConfiguration
---

# Set-CsTenantMigrationConfiguration

## SYNOPSIS
Used to enable or disable Meeting Migration Service (MMS).

## SYNTAX

### Identity (Default)
```
Set-CsTenantMigrationConfiguration [[-Identity] <String>]
 [-Confirm]
 [-Force]
 [-MeetingMigrationEnabled <Boolean>]
 [-Tenant <Guid>]
 [-WhatIf]
 [<CommonParameters>]
```

### Instance
```
Set-CsTenantMigrationConfiguration [-Instance <Object>]
 [-Confirm]
 [-Force]
 [-MeetingMigrationEnabled <Boolean>]
 [-Tenant <Guid>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Used to enable or disable Meeting Migration Service (MMS).
For more information, see [Using the Meeting Migration Service (MMS)](https://learn.microsoft.com/skypeforbusiness/audio-conferencing-in-office-365/setting-up-the-meeting-migration-service-mms).

## EXAMPLES

### Example 1
```
Set-CsTenantMigrationConfiguration -MeetingMigrationEnabled $false
```

This example disables MMS in the organization.

## PARAMETERS

### -Confirm

> Applicable: Microsoft Teams

Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Microsoft Teams

The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Microsoft Teams

Unique identifier for the Migration Configuration.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance

> Applicable: Microsoft Teams

The Instance parameter allows you to pass a reference to an object to the cmdlet, rather than set individual parameter values.
You can retrieve this object reference by calling the `Get-CsTenantMigrationConfiguration` cmdlet.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MeetingMigrationEnabled

> Applicable: Microsoft Teams

Set this to false to disable the Meeting Migration Service.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

> Applicable: Microsoft Teams

Globally unique identifier (GUID) of the tenant account whose Migration Configurations are being created. For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Microsoft Teams

Shows what would happen if the cmdlet runs.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
