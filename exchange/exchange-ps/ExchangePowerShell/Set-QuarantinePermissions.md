---
applicable: Exchange Online, Built-in security add-on for on-premises mailboxes
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-quarantinepermissions
schema: 2.0.0
title: Set-QuarantinePermissions
---

# Set-QuarantinePermissions

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

**Note**: Instead of using this cmdlet to set quarantine policy permissions, we recommend using the EndUserQuarantinePermissionsValue parameter on the New-QuarantinePolicy and Set-QuarantinePolicy cmdlets.

Use the Set-QuarantinePermissions cmdlet to modify quarantine permissions objects that were created by the New-QuarantinePermissions and stored as a variable in the current PowerShell session. You use the variable as a value for the EndUserQuarantinePermission parameter on the New-QuarantinePolicy or Set-QuarantinePolicy cmdlets in the same PowerShell session.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-QuarantinePermissions -QuarantinePermissionsObject <QuarantinePermissions>
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
To see the current value of the permissions object that you want to modify, run the variable name as a command. For example, run the command `$Perms` to see the quarantine policy permissions stored in the `$Perms` variable.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-QuarantinePermissions -QuarantinePermissionsObject $Perms -PermissionToRequestRelease $true -PermissionToRelease $false
```

This example modifies the quarantine policy permissions in the exiting `$Perms` variable that was previously created using the New-QuarantinePermissions cmdlet in the same PowerShell session (the `$Perms` variable is still available and populated).

In the same PowerShell session, you can use `$Perms` for the _EndUserQuarantinePermissions_ parameter value in a New-QuarantinePolicy or Set-QuarantinePolicy command.

## PARAMETERS

### -QuarantinePermissionsObject

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The QuarantinePermissionsObject parameter specifies the existing variable that contains quarantine permissions that you want to modify. For example if you previously ran the command `$Perms = New-QuarantinePermissions <permissions>`, use the value `$Perms` for this parameter.

```yaml
Type: QuarantinePermissions
Parameter Sets: (All)
Aliases:

Required: True
Position: 9
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionToAllowSender

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The PermissionToBlockSender parameter specifies whether users are allowed to add the quarantined message sender to their Safe Senders list. Valid values are:

- $true: Allow sender is available for affected messages in quarantine.
- $false: Allow sender isn't available for affected messages in quarantine. This value is the default.

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

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The PermissionToBlockSender parameter specifies whether users are allowed to add the quarantined message sender to their Blocked Senders list. Valid values are:

- $true: Block sender is available in quarantine notifications for affected messages, and Block sender is available for affected messages in quarantine.
- $false: Block sender isn't available in quarantine notifications for affected messages, and Block sender isn't available for affected messages in quarantine. This value is the default.

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

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The PermissionToDelete parameter specifies whether users are allowed to delete messages from quarantine. Valid values are:

- $true: Delete messages and Delete from quarantine are available for affected messages in quarantine.
- $false: Delete messages and Delete from quarantine aren't available for affected messages in quarantine. This value is the default.

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

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The PermissionToDownload parameter specifies whether users are allowed to download messages from quarantine. Valid values are:

- $true: The permission is enabled.
- $false: The permission is disabled. This value is the default.

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

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The PermissionToPreview parameter specifies whether users are allowed to preview quarantined messages. Valid values are:

- $true: Preview message is available for affected messages in quarantine.
- $false: Preview message isn't available for affected messages in quarantine. This value is the default.

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

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

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

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

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

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The PermissionToViewHeader parameter specifies whether users are allowed to view the message headers of quarantined messages. Valid values are:

- $true: The permission is enabled.
- $false: The permission is disabled. This value is the default.

Currently, this value has no effect on available actions in quarantine notifications or quarantine for affected messages. View message header is always available for affected messages in quarantine.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
