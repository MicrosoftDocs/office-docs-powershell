---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-quarantinepermissions
applicable: Exchange Online, Exchange Online Protection
title: Set-QuarantinePermissions
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-QuarantinePermissions

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-QuarantinePermissions cmdlet to modify quarantine permissions objects that are used in quarantine tags (the New-QuarantineTag or Set-QuarantineTag cmdlets). This cmdlet only works on permissions objects that were created by the New-QuarantinePermissions cmdlet and stored in a variable that's currently available in the Windows PowerShell session.

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
To see the current value of the permissions object that you want to modify, run the variable name as a command. For example, run the command `$Perms` to see the quarantine tag permissions stored in the `$Perms` variable.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-QuarantinePermissions -QuarantinePermissionsObject $Perms -PermissionToRequestRelease $true -PermissionToRelease $false
```

This example modifies the specified quarantine tag permissions in the exiting `$Perms` permissions object that was created previously in the same Windows PowerShell session (the `$Perms` variable is still available and populated).

In the same Windows PowerShell session, you can use `$Perms` for the _EndUserQuarantinePermissions_ parameter value in a New-QuarantineTag or Set-QuarantineTag command.

## PARAMETERS

### -QuarantinePermissionsObject
The QuarantinePermissionsObject parameter specifies the variable that contains quarantine permissions object that you want to modify. For example if you ran the command `$Perms = New-QuarantinePermissions <permissions>`, use the value `$Perms` for this parameter.

```yaml
Type: QuarantinePermissions
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: 9
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionToAllowSender
{{ Fill PermissionToAllowSender Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 1
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionToBlockSender
The PermissionToBlockSender parameter specifies whether users are allowed to add the quarantined message sender to their Blocked Senders list. Valid values are:

- $true: The Block sender button is included in end-user quarantine notifications.
- $false: The Block sender button is not included in end-user quarantine notifications. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionToDelete
The PermissionToDelete parameter specifies whether users are allowed to delete messages from quarantine. Valid values are:

- $true: The Remove from quarantine button is included in the quarantined message details.
- $false: The Remove from quarantine button is not included in the quarantined message details. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionToDownload
The PermissionToDownload parameter specifies whether users are allowed to download messages from quarantine. Valid values are:

- $true: The permission is enabled.
- $false: The permission is disabled. This is the default value.

Currently, this value has no effect on the buttons that are included in end-user spam notifications or in quarantined message details.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionToPreview
The PermissionToPreview parameter specifies whether users are allowed to preview quarantined messages. Valid values are:

- $true: The Preview message button is included in the quarantined message details.
- $false: The Preview message button is not included in the quarantined message details. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionToRelease
The PermissionToRelease parameter specifies whether users are allowed to directly release messages from quarantine. Valid values are:

- $true: The Release button is included in end-user spam notifications, and the Release message button is included in the quarantined message details.
- $false: The Release button is not included in end-user spam notifications, and the Release message button is not included in the quarantined message details. This is the default value.

Don't set this parameter and the _PermissionToRequestRelease_ parameter to $true. Set one parameter to $true and the other to $false, or set both parameters to $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionToRequestRelease
The PermissionToRequestRelease parameter specifies whether users are allowed to request messages to be released from quarantine. The request must be approved by an admin. Valid values are:

- $true: The Release button is included in end-user spam notifications, and the Release message button is included in the quarantined message details.
- $false: The Release button is not included in end-user spam notifications, and the Release message button is not included in the quarantined message details. This is the default value.

Don't set this parameter and the _PermissionRelease_ parameter to $true. Set one parameter to $true and the other to $false, or set both parameters to $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 7
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionToViewHeader
The PermissionToViewHeader parameter specifies whether users are allowed to view the message headers of quarantined messages. Valid values are:

- $true: The permission is enabled.
- $false: The permission is disabled. This is the default value.

Currently, this value has no effect on the buttons that are included in end-user spam notifications or in quarantined message details. The View message header button is always available in the quarantined message details.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
