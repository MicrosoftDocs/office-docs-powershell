---
external help file: Microsoft.Exchange.WebClient-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-dataencryptionpolicy
applicable: Exchange Online, Exchange Online Protection
title: Set-DataEncryptionPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Set-DataEncryptionPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-DataEncryptionPolicy cmdlet to modify data encryption policies in Exchange Online.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### DCAdminPurgeKeyRequest
```
Set-DataEncryptionPolicy [-Identity] <DataEncryptionPolicyIdParameter> -PermanentDataPurgeReason <String> [-PermanentDataPurgeContact <String>]
 [-Confirm]
 [-Description <String>]
 [-DomainController <Fqdn>]
 [-Enabled <Boolean>]
 [-Force]
 [-Name <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### TenantAdminPurgeKeyRequest
```
Set-DataEncryptionPolicy [-Identity] <DataEncryptionPolicyIdParameter> -PermanentDataPurgeContact <String> -PermanentDataPurgeReason <String>
 [-PermanentDataPurgeRequested]
 [-Confirm]
 [-Description <String>]
 [-DomainController <Fqdn>]
 [-Enabled <Boolean>]
 [-Force]
 [-Name <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### RefreshKey
```
Set-DataEncryptionPolicy [-Identity] <DataEncryptionPolicyIdParameter>
 [-Refresh]
 [-Confirm]
 [-Description <String>]
 [-DomainController <Fqdn>]
 [-Enabled <Boolean>]
 [-Name <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-DataEncryptionPolicy -Identity "US Mailboxes" -Enabled $false
```

This example disabled the data encryption policy named US Mailboxes.

### Example 2
```powershell
Set-DataEncryptionPolicy -Identity "Europe Mailboxes" -Refresh
```

This example updates the data encryption policy named Europe Mailboxes after one of the associated keys has been rotated in the Azure Key Vault.

## PARAMETERS

### -Identity
The Identity parameter specifies the data encryption policy that you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: DataEncryptionPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -PermanentDataPurgeContact
The PermanentDataPurgeContact parameter specifies a contact for the purge of all data that's encrypted by the data encryption policy. If the value contains spaces, enclose the value in quotation marks.

You need to use this parameter with the PermanentDataPurgeRequested and PermanentDataPurgeReason parameters.

```yaml
Type: String
Parameter Sets: TenantAdminPurgeKeyRequest
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: DCAdminPurgeKeyRequest
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermanentDataPurgeReason
The PermanentDataPurgeReason parameter specifies a descriptive reason for the purge of all data that's encrypted by the data encryption policy. If the value contains spaces, enclose the value in quotation marks.

You need to use this parameter with the PermanentDataPurgeRequested and PermanentDataPurgeContact parameters.

```yaml
Type: String
Parameter Sets: TenantAdminPurgeKeyRequest, DCAdminPurgeKeyRequest
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermanentDataPurgeRequested
The PermanentDataPurgeRequested switch specifies whether to initiate the deletion of all data that's encrypted by the data encryption policy. You don't need to specify a value with this switch.

You need to use this switch with the PermanentDataPurgeReason and PermanentDataPurgeContact parameters.

After you use this switch, you can't assign the data encryption policy to other mailboxes.

```yaml
Type: SwitchParameter
Parameter Sets: TenantAdminPurgeKeyRequest
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Refresh
Use the Refresh switch to update the data encryption policy in Exchange Online after you rotate any of the associated keys in the Azure Key Vault. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: RefreshKey
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

This cmdlet has a built-in pause, so use `-Confirm:$false` to skip the confirmation.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The Description parameter specifies an optional description for the data encryption policy. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
The Enabled parameter enables or disable the data encryption policy. Valid values are:

- $true: The policy is enabled.
- $false: The policy is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

Use this switch to delete all data that's encrypted by the data encryption policy (the PermanentDataPurgeRequested switch), but the associated Azure Key Vault has also been deleted.

```yaml
Type: SwitchParameter
Parameter Sets: TenantAdminPurgeKeyRequest, DCAdminPurgeKeyRequest
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the unique name for the data encryption policy. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
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
