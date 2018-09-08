---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Online
title: Undo-SoftDeletedUnifiedGroup
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Undo-SoftDeletedUnifiedGroup

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Undo-SoftDeletedUnifiedGroup cmdlet to restore soft-deleted Office 365 groups in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Undo-SoftDeletedUnifiedGroup [-SoftDeletedObject] <UnifiedGroupIdParameter> [-Confirm] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Office 365 groups are group objects that are available across Office 365 services.

Soft-deleted Office 365 groups are groups that have been deleted, but can be restored within 30 days of being deleted. All of the group contents can be restored within this period. After 30 days, soft-deleted Office 365 groups are marked for permanent deletion and can't be restored.

To display all soft-deleted Office 365 groups in your organization, use the Get-AzureADMSDeletedGroup cmdlet in Azure Active Directory PowerShell. To permanently remove (purge) a soft-deleted Office 365 group, use the Remove-AzureADMSDeletedDirectoryObject cmdlet in Azure Active Directory PowerShell. For more information, see [Permanently delete an Office 365 group](https://support.office.com/article/b7c66b59-657a-4e1a-8aa0-8163b1f4eb54#bkmk_perm).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Undo-SoftDeletedUnifiedGroup -SoftDeletedObject "Marketing Department"
```

This example restores the soft-deleted Office 365 Group named Marketing Department.

## PARAMETERS

### -SoftDeletedObject
The SoftDeletedObject parameter specifies the soft-deleted Office 365 Group that you want to restore. You can use any value that uniquely identifies the Office 365 Group.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Domain\Account

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

Note: You might need to use the DistinguishedName or ExchangeGuid property to identify the soft-deleted Office 365 Group, because it's possible for an active Office 365 Group and a soft-deleted Office 365 Group to have the same primary SMTP address.

```yaml
Type: UnifiedGroupIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
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
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/89f09bfc-43d6-457c-978f-b699c27ea325.aspx)
