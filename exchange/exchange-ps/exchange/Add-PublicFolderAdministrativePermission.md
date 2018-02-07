---
applicable: Exchange Server 2010
schema: 2.0.0
---

# Add-PublicFolderAdministrativePermission

## SYNOPSIS
Use the Add-PublicFolderAdministrativePermission cmdlet to add administrative permissions to a public folder or a public folder hierarchy.

## SYNTAX

### Set1
```
Add-PublicFolderAdministrativePermission [-Identity] <PublicFolderIdParameter>
 -AccessRights <MultiValuedProperty> -User <SecurityPrincipalIdParameter> [-Confirm] [-Deny]
 [-DomainController <Fqdn>] [-InheritanceType <None | All | Descendents | SelfAndChildren | Children>]
 [-Server <ServerIdParameter>] [-WhatIf] [<CommonParameters>]
```

### Set3
```
Add-PublicFolderAdministrativePermission [[-Identity] <PublicFolderIdParameter>]
 [-AccessRights <MultiValuedProperty>] -Instance <PublicFolderAdministrativeAceObject>
 [-User <SecurityPrincipalIdParameter>] [-Confirm] [-Deny] [-DomainController <Fqdn>]
 [-InheritanceType <None | All | Descendents | SelfAndChildren | Children>] [-Server <ServerIdParameter>]
 [-WhatIf] [<CommonParameters>]
```

### Set2
```
Add-PublicFolderAdministrativePermission [-Identity] <PublicFolderIdParameter>
 -Owner <SecurityPrincipalIdParameter> [-Confirm] [-DomainController <Fqdn>] [-Server <ServerIdParameter>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Public folder administrative permissions" entry in the Mailbox Permissions topic.

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Add-PublicFolderAdministrativePermission -User Chris -Identity \MyPublicFolder -AccessRights ViewInformationStore
```

This example grants the user Chris the ViewInformationStore permission on the public folder MyPublicFolder.

### Example 2 -------------------------- (Exchange Server 2010)
```
Add-PublicFolderAdministrativePermission -User Chris -Identity \MyPublicFolder -AccessRights ViewInformationStore -Deny
```

This example denies the user Chris the ViewInformationStore permission.

## PARAMETERS

### -AccessRights
The AccessRights parameter specifies the rights that are being added. Valid values include:

- None The administrator has no rights to modify public folder attributes.

- ModifyPublicFolderACL The administrator has the right to modify client access permissions for the specified folder.

- ModifyPublicFolderAdminACL The administrator has the right to modify administrator permissions for the specified public folder.

- ModifyPublicFolderDeletedItemRetention The administrator has the right to modify the Public Folder Deleted Item Retention attributes (RetainDeletedItemsFor and UseDatabaseRetentionDefaults).

- ModifyPublicFolderExpiry The administrator has the right to modify the Public Folder Expiration attributes (AgeLimit and UseDatabaseAgeDefaults).

- ModifyPublicFolderQuotas The administrator has the right to modify the Public Folder Quota attributes (MaxItemSize, PostQuota, PostWarningQuota, and UseDatabaseQuotaDefaults)

- ModifyPublicFolderReplicaList The administrator has the right to modify the replica list attribute for the specified public folder (Replicas).

- AdministerInformationStore The administrator has the right to modify all other public folder properties that aren't defined previously.

- ViewInformationStore The administrator has the right to view public folder properties.

- AllExtendedRights The administrator has the right to modify all public folder properties.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: MultiValuedProperty
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the GUID or public folder name that represents a specific public folder. You can also include the path using the format TopLevelPublicFolder\\PublicFolder.

You can omit the parameter label so that only the public folder name or GUID is supplied.

```yaml
Type: PublicFolderIdParameter
Parameter Sets: Set1, Set2
Aliases:
Applicable: Exchange Server 2010

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

```yaml
Type: PublicFolderIdParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Instance
The Instance parameter specifies whether to pass an entire object to the command to be processed. It's mainly used in scripts where an entire object must be passed to the command.

```yaml
Type: PublicFolderAdministrativeAceObject
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Owner
The Owner parameter specifies the NT Owner access control list (ACL) on the object. Valid values are the user principal name (UPN), domain\\user, or alias.

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
The User parameter specifies the UPN, domain\\user, or alias of the user for whom rights are being added.

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-* and Set-* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Deny
The Deny switch specifies whether to deny the permission specified.

```yaml
Type: SwitchParameter
Parameter Sets: Set1, Set3
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InheritanceType
The InheritanceType parameter specifies the type of inheritance. Valid values are:

- None

- All

- Descendents

- SelfAndChildren

- Children

```yaml
Type: None | All | Descendents | SelfAndChildren | Children
Parameter Sets: Set1, Set3
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
The Server parameter specifies the server on which to perform the selected operations.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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
Aliases:
Applicable: Exchange Server 2010

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/50f2ce6f-599d-43b9-83e6-447165385771.aspx)

