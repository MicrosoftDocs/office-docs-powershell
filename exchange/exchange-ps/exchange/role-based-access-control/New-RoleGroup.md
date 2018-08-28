---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
title: New-RoleGroup
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps || o365scc-ps || eop-ps"
---

# New-RoleGroup

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-RoleGroup cmdlet to create management role groups.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set3
```
New-RoleGroup [-Name] <String> -LinkedDomainController <String>
 -LinkedForeignGroup <UniversalSecurityGroupIdParameter> [-Confirm]
 [-CustomConfigWriteScope <ManagementScopeIdParameter>]
 [-CustomRecipientWriteScope <ManagementScopeIdParameter>] [-Description <String>] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-Force] [-LinkedCredential <PSCredential>] [-ManagedBy <MultiValuedProperty>]
 [-Members <MultiValuedProperty>]
 [-RecipientOrganizationalUnitScope <OrganizationalUnitIdParameter>] [-Roles <RoleIdParameter[]>]
 [-SamAccountName <String>] [-WhatIf] [<CommonParameters>]
```

### Set2
```
New-RoleGroup [-Name] <String> -LinkedDomainController <String>
 -LinkedForeignGroup <UniversalSecurityGroupIdParameter> [-Confirm]
 [-CustomConfigWriteScope <ManagementScopeIdParameter>]
 [-CustomRecipientWriteScope <ManagementScopeIdParameter>] [-Description <String>] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-Force] [-LinkedCredential <PSCredential>] [-ManagedBy <MultiValuedProperty>]
 [-Members <MultiValuedProperty>] [-RecipientOrganizationalUnitScope <OrganizationalUnitIdParameter>]
 [-Roles <RoleIdParameter[]>] [-SamAccountName <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You don't have to add members or assign management roles to the role group when you create it. However, until you add members or assign roles to the role group, the role group grants no permissions to users. You can also specify custom configuration or recipient scopes when you create a role group. These scopes are applied to the management role assignments created when the role group is created.

When you create a role group, you can create the group and add members to it directly, or you can create a linked role group. A linked role group links the role group to a universal security group (USG) in another forest. Creating a linked role group is useful if your servers running Exchange reside in a resource forest and your users and administrators reside in a separate user forest. If you create a linked role group, you can't add members directly to it. You must add the members to the USG in the foreign forest.

For more information about role groups, see Understanding management role groups (https://technet.microsoft.com/library/dd638105.aspx).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-RoleGroup -Name "Limited Recipient Management" -Roles "Mail Recipients", "Mail Enabled Public Folders" -Members Kim, Martin
```

This example creates a role group. The Mail Recipients and Mail Enabled Public Folders roles are assigned to the role group, and the users Kim and Martin are added as members. Because no scopes were provided, Kim and Martin can manage any recipient and reset passwords for any users in the organization.

### -------------------------- Example 2 --------------------------
```
New-RoleGroup -Name "Seattle Limited Recipient Management" -Roles "Mail Recipients", "Mail Enabled Public Folders" -Members John, Carol -CustomRecipientWriteScope "Seattle Recipients"
```

This example creates a role group with a custom recipient scope. The custom recipient scope, Seattle Recipients, limits the scope of the roles assigned to the role group to recipients who have their City property set to Seattle. The Mail Recipients and Mail Enabled Public Folders roles are assigned to the role group, and the users John and Carol are added as members.

### -------------------------- Example 3 --------------------------
```
New-RoleGroup -Name "Transport Rules Management" -Roles "Transport Rules" -Members "Compliance Group" -ManagedBy Isabel
```

This example creates a role group and enables Isabel to add or remove members to or from the role group by adding her to the ManagedBy property. The Transport Rules role is assigned to the role group, and the Compliance Group USG is added as a member.

### -------------------------- Example 4 --------------------------
```
$Credentials = Get-Credential; New-RoleGroup -Name "ContosoUsers: Toronto Recipient Admins" -LinkedDomainController dc02.contosousers.contoso.com -LinkedCredential $Credentials -LinkedForeignGroup "Toronto Administrators" -CustomRecipientWriteScope "Toronto Recipients" -Roles "Mail Recipients"
```

This example creates a linked role group that enables the members of the Toronto Administrators USG in the Contoso user forest to manage recipients located in the Toronto office. The custom recipient scope, Toronto Recipients, limits the scope of the roles assigned to the role group to recipients who have their City property set to Toronto. The Mail Recipients role is assigned to the role group.

The first command retrieves the credentials using the Get-Credential cmdlet and stores them in the $Credentials variable. Then the linked role group is created using the second command.

### -------------------------- Example 5 --------------------------
```
$RoleGroup = Get-RoleGroup "Recipient Management"; New-RoleGroup "Limited Recipient Management" -Roles $RoleGroup.Roles
```

This example takes an existing role group and copies the roles from that role group into a new custom role group. This can be useful if you want to create a role group similar to an existing role group but don't want to manually create all the role assignments. For example, you might want to create a role group that has most, but not all, of the management roles assigned to the Recipient Management role group.

The first command stores the existing role group in a variable, and the second command creates the custom role group.

This example uses variables to store information. For more information about variables, see User-defined variables (https://technet.microsoft.com/library/bb123690.aspx).

### -------------------------- Example 6 --------------------------
```
Remove-ManagementRoleAssignment "Distribution Groups-Limited Recipient Management"
```

This example removes the role assignment between the Distribution Groups management role and the Limited Recipient Management role group that you created in the previous example.

## PARAMETERS

### -LinkedDomainController
This parameter is available only in on-premises Exchange.

The LinkedDomainController parameter specifies the fully qualified domain name (FQDN) or IP address of the domain controller in the forest where the foreign USG resides. The domain controller you specify is used to get security information for the foreign USG specified by the LinkedForeignGroup parameter.

If you use the LinkedDomainController parameter, you must specify a foreign USG with the LinkedForeignGroup parameter and you can't use the Members parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedForeignGroup
This parameter is available only in on-premises Exchange.

The LinkedForeignGroup parameter specifies the name of the foreign USG you want to link this role group to. If the foreign USG name contains spaces, enclose the name in quotation marks (").

If you use the LinkedForeignGroup parameter, you must specify a domain controller in the LinkedDomainController parameter and you can't use the Members parameter.

```yaml
Type: UniversalSecurityGroupIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name of the new role group. The name can have a maximum of 64 characters. If the name contains spaces, enclose the name in quotation marks (").

Note: If you create a linked role group, we recommend that you include the name of the foreign forest in the name of the role group so that you can more easily associate the linked role group and the associated foreign forest. This is especially important if you have multiple forests.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomConfigWriteScope
This parameter is available only in on-premises Exchange.

The CustomConfigWriteScope parameter specifies the existing configuration-based management scope to associate with management role assignments created with this role group. If the management scope name contains spaces, enclose the name in quotation marks ("). Use the Get-ManagementScope cmdlet to retrieve a list of existing management scopes.

```yaml
Type: ManagementScopeIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomRecipientWriteScope
The CustomRecipientWriteScope parameter specifies the existing recipient-based management scope to associate with management role assignments created with this role group. If the management scope name contains spaces, enclose the name in quotation marks (").

Use the Get-ManagementScope cmdlet to retrieve a list of existing management scopes.

If you use the CustomRecipientWriteScope parameter, you can't use the RecipientOrganizationalUnitScope parameter.

```yaml
Type: ManagementScopeIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The Description parameter specifies the description that's displayed when the role group is viewed using the Get-RoleGroup cmdlet. Enclose the description in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
The DisplayName parameter specifies the friendly name of the role group. If the name contains spaces, enclose the name in quotation marks ("). This parameter can have a maximum length of 256 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedCredential
This parameter is available only in on-premises Exchange.

The LinkedCredential parameter specifies credentials to use to access the domain controller specified by the LinkedDomainController parameter.

This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedBy
The ManagedBy parameter specifies the users or USGs who can modify the configuration of a role group or add and remove members to or from a role group.

You can use the name, distinguished name (DN), or primary SMTP address of the user or USG that you want to add. If the name of the user or USG contains spaces, enclose the name in quotation marks (").

If you want to add more than one user or USG, separate them using commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Members
The Members parameter specifies the mailboxes or USGs to add as a member of the role group. You can use the name, DN, or primary SMTP address of the user or USG you want to add. If the name of the user or USG contains spaces, enclose the name in quotation marks ("). If you want to add more than one user or USG, separate them using commas.

If you use the Members parameter, you can't use the LinkedForeignGroup, LinkedDomainController or LinkedCredential parameters.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientOrganizationalUnitScope
This parameter is available only in on-premises Exchange.

The RecipientOrganizationalUnitScope parameter specifies the organizational unit (OU) scope added to the role assignments created when the role group is created. If you use the RecipientOrganizationalUnitScope parameter, you can't use the CustomRecipientWriteScope parameter. To specify an OU, use the syntax: domain/ou. If the OU name contains spaces, enclose the domain and OU in quotation marks (").

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Roles
The Roles parameter specifies the management roles to assign to the role group when it's created. If a role name contains spaces, enclose the name in quotation marks ("). If you want to assign more that one role, separate the role names with commas.

For a list of built-in management roles that you can assign to a role group, see Built-in management roles (https://technet.microsoft.com/library/dd638077.aspx).

```yaml
Type: RoleIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SamAccountName
This parameter is available only in on-premises Exchange.

The SamAccountName parameter (also known as the pre-Windows 2000 user account or group name) specifies an object identifier that's compatible with older versions of Microsoft Windows client and server operating systems. The value can contain letters, numbers, spaces, periods (.), and the characters !, #, $, %, ^, &, -, \_, {, } and ~. The last character can't be a period. Unicode characters are allowed, but accented characters may generate collisions (for example, o and ö match). The maximum length is 20 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
This parameter doesn't work in the Office 365 Security & Compliance Center.

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
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

[Online Version](https://technet.microsoft.com/library/c59f596d-cbdd-459e-b31f-99d03e684299.aspx)
