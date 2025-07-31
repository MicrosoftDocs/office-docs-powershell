---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/new-quarantinepermissions
schema: 2.0.0
title: New-QuarantinePermissions
---

# New-QuarantinePermissions

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

**Note**: Instead of using this cmdlet to set quarantine policy permissions, we recommend using the EndUserQuarantinePermissionsValue parameter on the New-QuarantinePolicy and Set-QuarantinePolicy cmdlets.

Use the New-QuarantinePermissions cmdlet to create a variable that contains a quarantine permissions object to use with the EndUserQuarantinePermission parameter on the New-QuarantinePolicy or Set-QuarantinePolicy cmdlets in the same PowerShell session.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-QuarantinePermissions
 [[-PermissionToAllowSender] <Boolean>]
 [[-PermissionToBlockSender] <Boolean>]
 [[-PermissionToDelete] <Boolean>]
 [[-PermissionToDownload] <Boolean>]
 [[-PermissionToPreview] <Boolean>]
 [[-PermissionToRelease] <Boolean>]
 [[-PermissionToRequestRelease] <Boolean>]
 [[-PermissionToViewHeader] <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
The default value for any parameters that you don't use is $false, so you only need to use parameters (permissions) that you want to set to $true.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
$NoAccess = New-QuarantinePermissions
```

This example creates the same permissions that are used by the No access permissions group in quarantine policies. The permissions object is stored in the variable named `$NoAccess`.

In the same PowerShell session, you can use `$NoAccess` for the _EndUserQuarantinePermissions_ parameter value in a New-QuarantinePolicy or Set-QuarantinePolicy command.

### Example 2
```powershell
$LimitedAccess = New-QuarantinePermissions -PermissionToAllowSender $true -PermissionToDelete $true -PermissionToPreview $true -PermissionToRequestRelease $true
```

This example creates the same permissions that are used by the Limited access permissions group in quarantine policies. The permissions object is stored in the variable named `$LimitedAccess`.

In the same PowerShell session, you can use `$LimitedAccess` for the _EndUserQuarantinePermissions_ parameter value in a New-QuarantinePolicy or Set-QuarantinePolicy command.

### Example 3
```powershell
$FullAccess = New-QuarantinePermissions -PermissionToAllowSender $true -PermissionToDelete $true -PermissionToPreview $true -PermissionToRelease $true
```

This example creates the same permissions that are used by the Full access permissions group in quarantine policies. The permissions object is stored in the variable named `$FullAccess`.

In the same PowerShell session, you can use `$FullAccess` for the _EndUserQuarantinePermissions_ parameter value in a New-QuarantinePolicy or Set-QuarantinePolicy command.

## PARAMETERS

### -PermissionToAllowSender

> Applicable: Exchange Online, Exchange Online Protection

The PermissionToAllowSender parameter specifies whether users are allowed to add the quarantined message sender to their Safe Senders list. Valid values are:

- $true: Allow sender is available for affected messages in quarantine.
- $false: Allow sender isn't available for affected messages in quarantine. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionToBlockSender

> Applicable: Exchange Online, Exchange Online Protection

The PermissionToBlockSender parameter specifies whether users are allowed to add the quarantined message sender to their Blocked Senders list. Valid values are:

- $true: Block sender is available in quarantine notifications for affected messages, and Block sender is available for affected messages in quarantine.
- $false: Block sender isn't available in quarantine notifications for affected messages, and Block sender isn't available for affected messages in quarantine. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionToDelete

> Applicable: Exchange Online, Exchange Online Protection

The PermissionToDelete parameter specifies whether users are allowed to delete messages from quarantine. Valid values are:

- $true: Delete messages and Delete from quarantine are available for affected messages in quarantine.
- $false: Delete messages and Delete from quarantine aren't available for affected messages in quarantine. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionToDownload

> Applicable: Exchange Online, Exchange Online Protection

The PermissionToDownload parameter specifies whether users are allowed to download messages from quarantine. Valid values are:

- $true: The permission is enabled.
- $false: The permission is disabled. This is the default value.

Currently, this value has no effect on the available actions in quarantine notifications or quarantine for affected messages. End-users can't download quarantined messages.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionToPreview

> Applicable: Exchange Online, Exchange Online Protection

The PermissionToPreview parameter specifies whether users are allowed to preview quarantined messages. Valid values are:

- $true: Preview message is available for affected messages in quarantine.
- $false: Preview message isn't available for affected messages in quarantine. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionToRelease

> Applicable: Exchange Online, Exchange Online Protection

The PermissionToRelease parameter specifies whether users are allowed to directly release affected messages from quarantine. Valid values are:

- $true: Release is available in quarantine notifications for affected messages, and Release (Release email) is available for affected messages in quarantine.
- $false: Release message isn't available in quarantine notifications for affected messages, and Release and Release email aren't available for affected messages in quarantine.

Don't set this parameter and the _PermissionToRequestRelease_ parameter to $true. Set one parameter to $true and the other to $false, or set both parameters to $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionToRequestRelease

> Applicable: Exchange Online, Exchange Online Protection

The PermissionToRequestRelease parameter specifies whether users are allowed to request messages to be released from quarantine. The request must be approved by an admin. Valid values are:

- $true: Request Release is available in quarantine notifications for affected messages, and Request release is available for affected messages in quarantine.
- $false: Request Release isn't available in quarantine notifications for affected messages, and Request release isn't available for affected messages in quarantine.

Don't set this parameter and the _PermissionRelease_ parameter to $true. Set one parameter to $true and the other to $false, or set both parameters to $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 7
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionToViewHeader

> Applicable: Exchange Online, Exchange Online Protection

The PermissionToViewHeader parameter specifies whether users are allowed to view the message headers of quarantined messages. Valid values are:

- $true: The permission is enabled.
- $false: The permission is disabled. This is the default value.

Currently, this value has no effect on the available actions in quarantine notifications or quarantine for affected messages. View message header is always available for affected messages in quarantine.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 8
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
