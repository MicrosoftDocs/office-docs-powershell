---
applicable: Exchange Server 2010
author: chrisda
external help file: Microsoft.Exchange.WebClient-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/remove-publicfolderadministrativepermission
schema: 2.0.0
title: Remove-PublicFolderAdministrativePermission
---

# Remove-PublicFolderAdministrativePermission

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Remove-PublicFolderAdministrativePermission cmdlet to remove administrative permissions for a public folder or a public folder hierarchy.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Remove-PublicFolderAdministrativePermission [-Identity] <PublicFolderIdParameter> -AccessRights <MultiValuedProperty> -User <SecurityPrincipalIdParameter>
 [-Confirm]
 [-Deny]
 [-DomainController <Fqdn>]
 [-InheritanceType <ActiveDirectorySecurityInheritance>]
 [-Server <ServerIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### Instance
```
Remove-PublicFolderAdministrativePermission [[-Identity] <PublicFolderIdParameter>] -Instance <PublicFolderAdministrativeAceObject>
 [-AccessRights <MultiValuedProperty>]
 [-Confirm]
 [-Deny]
 [-DomainController <Fqdn>]
 [-InheritanceType <ActiveDirectorySecurityInheritance>]
 [-Server <ServerIdParameter>]
 [-User <SecurityPrincipalIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-PublicFolderAdministrativePermission -User Chris -Identity \MyPublicFolder -AccessRights ViewInformationStore
```

This example removes the ViewInformationStore permission from the user Chris on the public folder MyPublicFolder.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010

The Identity parameter specifies the GUID or public folder name that represents a specific public folder. You can also include the path using the format TopLevelPublicFolder\\PublicFolder.

You can omit the parameter label so that only the public folder name or GUID is supplied.

```yaml
Type: PublicFolderIdParameter
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AccessRights

> Applicable: Exchange Server 2010

The AccessRights parameter specifies the rights being removed. Valid values include:

- None The administrator doesn't have any rights to modify public folder attributes.
- ModifyPublicFolderACL The administrator has the right to modify client access permissions for the specified folder.
- ModifyPublicFolderAdminACL The administrator has the right to modify administrator permissions for the specified public folder.
- ModifyPublicFolderDeletedItemRetention The administrator has the right to modify the Public Folder Deleted Item Retention attributes (RetainDeletedItemsFor or UseDatabaseRetentionDefaults).
- ModifyPublicFolderExpiry The administrator has the right to modify the Public Folder Expiration attributes (AgeLimitUseDatabaseAgeDefaults).
- ModifyPublicFolderQuotas The administrator has the right to modify the Public Folder Quota attributes (MaxItemSize, PostQuota, PostWarningQuota, or UseDatabaseQuotaDefaults).
- ModifyPublicFolderReplicaList The administrator has the right to modify the replica list attribute for the specified public folder (Replicas).
- AdministerInformationStore The administrator has the right to modify all other public folder properties not defined previously.
- ViewInformationStore The administrator has the right to view public folder properties.
- AllExtendedRights The administrator has the right to modify all public folder properties.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity, Instance
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance

> Applicable: Exchange Server 2010

The Instance parameter specifies whether to pass an entire object to the command to be processed. It is mainly used in scripts where an entire object must be passed to the command.

```yaml
Type: PublicFolderAdministrativeAceObject
Parameter Sets: Instance
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -User

> Applicable: Exchange Server 2010

The User parameter specifies whose admin permissions are being removed from the specified public folder. You can specify the following types of users or groups (security principals) for this parameter:

- Mailbox users
- Mail users
- Security groups

You can use any value that uniquely identifies the user or group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: Identity, Instance
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -Deny

> Applicable: Exchange Server 2010

The Deny switch specifies that the permissions you're removing are Deny permissions. You don't need to specify a value with this switch.

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

### -DomainController

> Applicable: Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InheritanceType

> Applicable: Exchange Server 2010

The InheritanceType parameter specifies the type of inheritance. Valid values are:

- None
- All (this is the default value)
- Children
- Descendents [sic]
- SelfAndChildren

```yaml
Type: ActiveDirectorySecurityInheritance
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server

> Applicable: Exchange Server 2010

The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
