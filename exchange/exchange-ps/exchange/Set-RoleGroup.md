---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-rolegroup
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Security & Compliance, Exchange Online Protection
title: Set-RoleGroup
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-RoleGroup

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-RoleGroup cmdlet to modify who can add or remove members to or from management role groups or change the name of the role group.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### CrossForest
```
Set-RoleGroup [-Identity] <RoleGroupIdParameter> -LinkedDomainController <String> -LinkedForeignGroup <UniversalSecurityGroupIdParameter>
 [-LinkedCredential <PSCredential>]
 [-BypassSecurityGroupManagerCheck]
 [-Confirm]
 [-Description <String>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-ManagedBy <MultiValuedProperty>]
 [-Name <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### Default
```
Set-RoleGroup [-Identity] <RoleGroupIdParameter>
 [-Force]
 [-BypassSecurityGroupManagerCheck]
 [-Confirm]
 [-Description <String>]
 [-DisplayName <String>]
 [-ManagedBy <MultiValuedProperty>]
 [-Name <String>]
 [-WellKnownObject <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
If you want to add or remove members to or from an existing role group, use the Add-RoleGroupMember or Remove-RoleGroupMember cmdlets. If you want to add or remove management role assignments to or from a role group, use the New-ManagementRoleAssignment or Remove-ManagementRoleAssignment cmdlets. If you want to add or remove members to or from a linked role group, you must add or remove the members to or from the foreign universal security group (USG) in the foreign forest. To find the foreign USG, use the Get-RoleGroup cmdlet.

If the ManagedBy property is populated with role group managers, the user configuring a role group must be a role group manager. Alternately, if the user is a member of the Organization Management role group or is directly or indirectly assigned the Role Management role, the BypassSecurityGroupManagerCheck switch can be used to override the security group management check.

For more information about role groups, see [Understanding management role groups](https://learn.microsoft.com/exchange/understanding-management-role-groups-exchange-2013-help).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-RoleGroup "London Recipient Administrators" -ManagedBy "David", "Christine"
```

This example sets the role group managers list to David and Christine on the London Recipient Administrators role group.

### Example 2
```powershell
Set-RoleGroup "Seattle Administrators" -ManagedBy "Seattle Role Administrators" -BypassSecurityGroupManagerCheck
```

This example sets the role group managers list to the Seattle Role Administrators USG on the Seattle Administrators role group. Because the user running the command wasn't added to the ManagedBy property of the role group, the BypassSecurityGroupManagerCheck switch must be used. The user is assigned the Role Management role, which enables the user to bypass the security group manager check.

### Example 3
```powershell
$Credentials = Get-Credential

Set-RoleGroup "ContosoUsers: Toronto Recipient Admins" -LinkedDomainController dc02.contosousers.contoso.com -LinkedCredential $Credentials -LinkedForeignGroup "Toronto Tier 2 Administrators"
```

This example modifies the linked foreign USG on the existing linked role group ContosoUsers: Toronto Recipient Admins. The foreign USG that should be linked is Toronto Tier 2 Administrators.

The first command retrieves the credentials using the Get-Credential cmdlet and stores them in the $Credentials variable. The second command modifies the foreign USG on the ContosoUsers: Toronto Recipient Admins linked role group.

## PARAMETERS

### -Identity
The Identity parameter specifies the name of the role group to modify. If the name contains spaces, enclose the name in quotation marks (").

```yaml
Type: RoleGroupIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Security & Compliance, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -LinkedDomainController
This parameter is available only in on-premises Exchange.

The LinkedDomainController parameter specifies the fully qualified domain name (FQDN) or IP address of the domain controller in the forest where the foreign USG resides. The domain controller you specify is used to get security information for the foreign USG specified by the LinkedForeignGroup parameter.

You can only use the LinkedDomainController parameter with a linked role group.

```yaml
Type: String
Parameter Sets: CrossForest
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedForeignGroup
This parameter is available only in on-premises Exchange.

The LinkedForeignGroup parameter specifies the name of the foreign USG you want to link this role group to. If the foreign USG name contains spaces, enclose the name in quotation marks (").

You can only use the LinkedForeignGroup parameter to change the foreign USG linked to an existing linked role group. You can't change a standard role group to a linked role group by using the Set-RoleGroup cmdlet. You must create a role group using the New-RoleGroup cmdlet.

If you use the LinkedForeignGroup parameter, you must specify a domain controller in the LinkedDomainController parameter.

```yaml
Type: UniversalSecurityGroupIdParameter
Parameter Sets: CrossForest
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassSecurityGroupManagerCheck
The BypassSecurityGroupManagerCheck switch specifies whether to allow a user who isn't an owner of the group to modify or delete the group. You don't need to specify a value with this switch.

If you aren't defined in the ManagedBy property of the group, you need to use this switch in commands that modify or delete the group. To use this switch, your account requires specific permissions based on the group type:

- Distribution groups or mail-enabled security groups: You need to be a member of the Organization Management role group or have the Security Group Creation and Membership role assigned.
- Role groups: You need to be a member of the Organization Management role group or have the Role Management role assigned.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Security & Compliance, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The Description parameter specifies the description displayed when the role group is viewed using the Get-RoleGroup cmdlet. Enclose the description in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Security & Compliance, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
The DisplayName parameter specifies the friendly name of the role group. If the name contains spaces, enclose the name in quotation marks ("). This parameter has a maximum length of 256 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Security & Compliance, Exchange Online Protection

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
Parameter Sets: CrossForest
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
This parameter is available only in the cloud-based service.

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

```yaml
Type: SwitchParameter
Parameter Sets: Default
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedCredential
This parameter is available only in on-premises Exchange.

The LinkedCredential parameter specifies the username and password that's used to access the domain controller specified by the LinkedDomainController parameter.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

You can only use the LinkedCredential parameter with a linked role group.

```yaml
Type: PSCredential
Parameter Sets: CrossForest
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedBy
The ManagedBy parameter specifies the users or USG who can modify the configuration of a role group or add or remove members to or from a role group. The list you specify with this parameter overwrites the existing ManagedBy list. To add or remove individual role group managers, and for more information about modifying multivalued properties, see [Modifying multivalued properties](https://learn.microsoft.com/exchange/modifying-multivalued-properties-exchange-2013-help).

You can use the name, distinguished name (DN), or primary SMTP address of the user or USG you want to add. If the name of the user or USG contains spaces, enclose the name in quotation marks (").

If you want to add more than one user or USG, separate them using commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name of the role group. The name can contain up to 64 characters. If the name contains spaces, enclose the name in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Security & Compliance, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WellKnownObject
This parameter is available only in the cloud-based service.

{{ Fill WellKnownObject Description }}

```yaml
Type: String
Parameter Sets: Default
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in Security & Compliance PowerShell.

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Security & Compliance, Exchange Online Protection

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
