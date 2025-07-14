---
external help file: WhiteboardAdmin-help.xml
Module Name: WhiteboardAdmin
online version: https://learn.microsoft.com/powershell/module/whiteboard/get-whiteboardsettings
applicable: Microsoft Whiteboard
title: Get-WhiteboardSettings
schema: 2.0.0
author: shwetawagh
ms.author: shwetawagh
ms.reviewer:
---

# Get-WhiteboardSettings

## SYNOPSIS

Get the users Whiteboard settings.

## SYNTAX

```
Get-WhiteboardSettings [-ForceAuthPrompt] [<CommonParameters>]
```

## DESCRIPTION

Gets tenant settings from the Microsoft Whiteboard service and returns them as an object.

## EXAMPLES

### EXAMPLE 1

This command gets tenant settings from the Microsoft Whiteboard service and returns them as an object.

```powershell
PS C:\> Get-WhiteboardSettings
```

```Output
isClaimEnabled                : True
privacySettings               : @{telemetryDataPolicy=Optional; isEnabledConnectedServices=True}
tenantMetadata                : @{isGovUser=False; isEduUser=False}
isSharePointDefault           : False
isSharePointDefaultGa         : True
isSharePointDefaultRolledOut  : True
isAzureBlocked                : False
licenseCheckInformation       : Success
isFluidMigrationEnabled       : False
isTenantAdminMigrationEnabled : True
isEnabled                     : True
isEnabledGa                   : True
```

## PARAMETERS

### -ForceAuthPrompt

Always prompt for authentication. Use to ignore cached credentials.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
Applicable: Microsoft Whiteboard
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

For details on user IDs, see the [overview page](../../docs-conceptual/overview.md).

## RELATED LINKS
