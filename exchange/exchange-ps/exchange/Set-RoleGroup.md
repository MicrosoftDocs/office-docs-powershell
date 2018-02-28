---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
schema: 2.0.0
---

# Set-RoleGroup

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-RoleGroup cmdlet to modify who can add or remove members to or from management role groups or change the name of the role group.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set3
```
Set-RoleGroup [-Identity] <RoleGroupIdParameter> -LinkedDomainController <String>
 -LinkedForeignGroup <UniversalSecurityGroupIdParameter> [-BypassSecurityGroupManagerCheck] [-Confirm]
 [-Description <String>] [-DisplayName <String>] [-DomainController <Fqdn>] [-LinkedCredential <PSCredential>]
 [-ManagedBy <MultiValuedProperty>] [-Name <String>] [-WhatIf] [<CommonParameters>]
```

### Set2
```
Set-RoleGroup [-Identity] <RoleGroupIdParameter> -LinkedDomainController <String>
 -LinkedForeignGroup <UniversalSecurityGroupIdParameter> [-BypassSecurityGroupManagerCheck] [-Confirm]
 [-Description <String>] [-DisplayName <String>] [-DomainController <Fqdn>] [-Force]
 [-LinkedCredential <PSCredential>] [-ManagedBy <MultiValuedProperty>] [-Name <String>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
If you want to add or remove members to or from an existing role group, use the Add-RoleGroupMember or Remove-RoleGroupMember cmdlets. If you want to add or remove management role assignments to or from a role group, use the New-ManagementRoleAssignment or Remove-ManagementRoleAssignment cmdlets. If you want to add or remove members to or from a linked role group, you must add or remove the members to or from the foreign universal security group (USG) in the foreign forest. To find the foreign USG, use the Get-RoleGroup cmdlet.

If the ManagedBy property is populated with role group managers, the user configuring a role group must be a role group manager. Alternately, if the user is a member of the Organization Management role group or is directly or indirectly assigned the Role Management role, the BypassSecurityGroupManagerCheck switch can be used to override the security group management check.

For more information about role groups, see Understanding management role groups.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Set-RoleGroup "London Recipient Administrators" -ManagedBy "David", "Christine"
```

This example sets the role group managers list to David and Christine on the London Recipient Administrators role group.

### Example 2
```
Set-RoleGroup "Seattle Administrators" -ManagedBy "Seattle Role Administrators" -BypassSecurityGroupManagerCheck
```

This example sets the role group managers list to the Seattle Role Administrators USG on the Seattle Administrators role group. Because the user running the command wasn't added to the ManagedBy property of the role group, the BypassSecurityGroupManagerCheck switch must be used. The user is assigned the Role Management role, which enables the user to bypass the security group manager check.

### Example 3
```
$Credentials = Get-Credential; Set-RoleGroup "ContosoUsers: Toronto Recipient Admins" -LinkedDomainController dc02.contosousers.contoso.com -LinkedCredential $Credentials -LinkedForeignGroup "Toronto Tier 2 Administrators"
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassSecurityGroupManagerCheck
The BypassSecurityGroupManagerCheck switch enables a user who hasn't been added to the ManagedBy property to modify a role group. The user must be a member of the Organization Management role group or be assigned, either directly or indirectly, the Role Management role.

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

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -Description
The Description parameter specifies the description displayed when the role group is viewed using the Get-RoleGroup cmdlet. Enclose the description in quotation marks (").

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

You can only use the LinkedCredential parameter with a linked role group.

This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedBy
The ManagedBy parameter specifies the users or USG who can modify the configuration of a role group or add or remove members to or from a role group. The list you specify with this parameter overwrites the existing ManagedBy list. To add or remove individual role group managers, and for more information about modifying multivalued properties, see Modifying multivalued properties.

You can use the name, distinguished name (DN), or primary SMTP address of the user or USG you want to add. If the name of the user or USG contains spaces, enclose the name in quotation marks (").

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

### -Name
The Name parameter specifies the name of the role group. The name can contain up to 64 characters. If the name contains spaces, enclose the name in quotation marks (").

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

### -WhatIf
This parameter doesn't work in the Office 365 Security & Compliance Center.

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

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

[Online Version](https://technet.microsoft.com/library/c66ee1a2-cec7-4b76-a592-a5e626f4f9d3.aspx)
