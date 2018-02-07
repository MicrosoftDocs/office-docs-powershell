---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
schema: 2.0.0
---

# Get-RoleGroup

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-RoleGroup cmdlet to retrieve a list of management role groups.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-RoleGroup cmdlet to retrieve a list of management role groups.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

###  (Default)
```
Get-RoleGroup [[-Identity] <RoleGroupIdParameter>] [-DomainController <Fqdn>] [-Filter <String>]
 [-Organization <OrganizationIdParameter>] [-ReadFromDomainController] [-ResultSize <Unlimited>]
 [-ShowPartnerLinked] [-SortBy <String>] [<CommonParameters>]
```

### Set1
```
Get-RoleGroup [[-Identity] <RoleGroupIdParameter>] [-DomainController <Fqdn>] [-Filter <String>]
 [-ReadFromDomainController] [-ResultSize <Unlimited>] [-ShowPartnerLinked] [-SortBy <String>]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

For more information about role groups, see Understanding Management Role Groups.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Role groups" entry in the Role Management Permissions topic.

!!! Exchange Server 2013

For more information about role groups, see Understanding management role groups.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Role groups" entry in the Role management permissions topic.

!!! Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

For more information about role groups, see Understanding management role groups.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-RoleGroup
```

This example retrieves a list of role groups.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-RoleGroup
```

This example retrieves a list of role groups.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-RoleGroup
```

This example retrieves a list of role groups.

### Example 1 -------------------------- (Exchange Online)
```
Get-RoleGroup
```

This example retrieves a list of role groups.

### Example 1 -------------------------- (Office 365 Security & Compliance Center)
```
Get-RoleGroup
```

This example retrieves a list of role groups.

### Example 1 -------------------------- (Exchange Online Protection)
```
Get-RoleGroup
```

This example retrieves a list of role groups.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-RoleGroup "Recipient Administrators" | Format-List
```

This example retrieves the details for the Recipient Administrators role group.


For more information about the Format-List cmdlet and pipelining, see Working with Command Output and Pipelining.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-RoleGroup "Recipient Administrators" | Format-List
```

This example retrieves the details for the Recipient Administrators role group.


For more information about the Format-List cmdlet and pipelining, see Working with command output and Pipelining.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-RoleGroup "Recipient Administrators" | Format-List
```

This example retrieves the details for the Recipient Administrators role group.

### Example 2 -------------------------- (Exchange Online)
```
Get-RoleGroup "Recipient Administrators" | Format-List
```

This example retrieves the details for the Recipient Administrators role group.

### Example 2 -------------------------- (Office 365 Security & Compliance Center)
```
Get-RoleGroup "Recipient Administrators" | Format-List
```

This example retrieves the details for the Recipient Administrators role group.

### Example 2 -------------------------- (Exchange Online Protection)
```
Get-RoleGroup "Recipient Administrators" | Format-List
```

This example retrieves the details for the Recipient Administrators role group.

### Example 3 -------------------------- (Exchange Server 2010)
```
Get-RoleGroup -ReadFromDomainController
```

This example retrieves a list of role groups as seen by the domain controller closest to the user.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-RoleGroup -ReadFromDomainController
```

This example retrieves a list of role groups as seen by the domain controller closest to the user.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-RoleGroup -ReadFromDomainController
```

This example retrieves a list of role groups as seen by the domain controller closest to the user.

### Example 3 -------------------------- (Exchange Online)
```
Get-RoleGroup -ReadFromDomainController
```

This example retrieves a list of role groups as seen by the domain controller closest to the user.

### Example 3 -------------------------- (Office 365 Security & Compliance Center)
```
Get-RoleGroup -ReadFromDomainController
```

This example retrieves a list of role groups as seen by the domain controller closest to the user.

### Example 3 -------------------------- (Exchange Online Protection)
```
Get-RoleGroup -ReadFromDomainController
```

This example retrieves a list of role groups as seen by the domain controller closest to the user.

### Example 4 -------------------------- (Exchange Server 2010)
```
Get-RoleGroup -Filter { RoleGroupType -Eq "Linked" } | Format-Table Name, LinkedGroup
```

This example retrieves a list of all linked role groups and the Active Directory security identifier (SID) of the foreign universal security groups (USG) that are linked to each of them. You can then use the SIDs to find the USGs so you can modify their members.

### Example 4 -------------------------- (Exchange Server 2013)
```
Get-RoleGroup -Filter { RoleGroupType -Eq "Linked" } | Format-Table Name, LinkedGroup
```

This example retrieves a list of all linked role groups and the Active Directory security identifier (SID) of the foreign universal security groups (USG) that are linked to each of them. You can then use the SIDs to find the USGs so you can modify their members.

### Example 4 -------------------------- (Exchange Server 2016)
```
Get-RoleGroup -Filter { RoleGroupType -Eq "Linked" } | Format-Table Name, LinkedGroup
```

This example retrieves a list of all linked role groups and the Active Directory security identifier (SID) of the foreign universal security groups (USG) that are linked to each of them. You can then use the SIDs to find the USGs so you can modify their members.

### Example 4 -------------------------- (Exchange Online)
```
Get-RoleGroup -Filter { RoleGroupType -Eq "Linked" } | Format-Table Name, LinkedGroup
```

This example retrieves a list of all linked role groups and the Active Directory security identifier (SID) of the foreign universal security groups (USG) that are linked to each of them. You can then use the SIDs to find the USGs so you can modify their members.

### Example 4 -------------------------- (Office 365 Security & Compliance Center)
```
Get-RoleGroup -Filter { RoleGroupType -Eq "Linked" } | Format-Table Name, LinkedGroup
```

This example retrieves a list of all linked role groups and the Active Directory security identifier (SID) of the foreign universal security groups (USG) that are linked to each of them. You can then use the SIDs to find the USGs so you can modify their members.

### Example 4 -------------------------- (Exchange Online Protection)
```
Get-RoleGroup -Filter { RoleGroupType -Eq "Linked" } | Format-Table Name, LinkedGroup
```

This example retrieves a list of all linked role groups and the Active Directory security identifier (SID) of the foreign universal security groups (USG) that are linked to each of them. You can then use the SIDs to find the USGs so you can modify their members.

## PARAMETERS

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

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

### -Filter
!!! Exchange Server 2010

The Filter parameter indicates the property to be used to filter the role groups. Only the role groups that match the criteria you specify are returned.

You can filter on the LinkedGroup, ManagedBy, Members, Name, RoleGroupType, and DisplayName properties. If you create a filter using the RoleGroupType property, the only values you can use in the filter are Standard and Linked.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

The Filter parameter specifies the property to be used to filter the role groups. Only the role groups that match the criteria you specify are returned.

You can filter on the LinkedGroup, ManagedBy, Members, Name, RoleGroupType, and DisplayName properties. If you create a filter using the RoleGroupType property, the only values you can use in the filter are Standard and Linked.



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

### -Identity
The Identity parameter specifies the role group to retrieve. If the name of the role group contains spaces, enclose the name in quotation marks (").

If the Identity parameter isn't specified, all role groups are returned.

```yaml
Type: RoleGroupIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Organization
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The Organization parameter specifies the organization in which you'll perform this action. This parameter doesn't accept wildcard characters, and you must use the exact name of the organization.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadFromDomainController
!!! Exchange Server 2010

The ReadFromDomainController switch specifies that the role group information should be read from a domain controller in the user's domain. If you use the Set-AdServerSettings cmdlet to include scope commands to the entire forest and don't use this switch, it's possible that the role group information is read from a global catalog with outdated information.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The ReadFromDomainController switch specifies that the role group information should be read from a domain controller in the user's domain. If you use the Set-AdServerSettings cmdlet to include scope commands to the entire forest and don't use this switch, it's possible that the role group information is read from a global catalog with outdated information.



!!! Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The ReadFromDomainController switch specifies that information should be read from a domain controller in the user's domain. If you run the command Set-AdServerSettings -ViewEntireForest $true to include all objects in the forest and you don't use the ReadFromDomainController switch, it's possible that information will be read from a global catalog that has outdated information. When you use the ReadFromDomainController switch, multiple reads might be necessary to get the information. You don't have to specify a value with this switch.

By default, the recipient scope is set to the domain that hosts your Exchange servers.



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

### -ResultSize
!!! Exchange Server 2010, Exchange Server 2013

The ResultSize parameter specifies the maximum number of results to return. If you want to return all the role groups, use Unlimited for the value of this parameter. The default value is 1000.



!!! Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.



```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowPartnerLinked
!!! Exchange Server 2010

This ShowPartnerLinked switch specifies whether to return built-in role groups that are of type PartnerRoleGroup. Role groups of this type are used in the cloud-based services to allow partner service providers to manage their customer organizations. These role groups can't be edited and are therefore not shown by default.

This parameter applies to objects in the cloud-based service. It isn't available for on-premises deployments.



!!! Exchange Server 2013

This ShowPartnerLinked switch specifies whether to return built-in role groups that are of type PartnerRoleGroup. Role groups of this type are used in the cloud-based services to allow partner service providers to manage their customer organizations. These role groups can't be edited and are therefore not shown by default.

This parameter is available only in the cloud-based service.



!!! Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

This parameter is available only in the cloud-based service.

This ShowPartnerLinked switch specifies whether to return built-in role groups that are of type PartnerRoleGroup. Role groups of this type are used in the cloud-based services to allow partner service providers to manage their customer organizations. These role groups can't be edited and are therefore not shown by default.



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

### -SortBy
!!! Exchange Server 2010, Exchange Server 2013

The SortBy parameter specifies the attribute by which to sort the results. You can sort by only one attribute at a time. You can sort by the Name attribute.

The results are sorted in ascending order.



!!! Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

The SortBy parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order.

If the default view doesn't include the property you're sorting by, you can append the command with | Format-Table -Auto \<Property1\>,\<Property2\>... to create a new view that contains all of the properties that you want to see. Wildcards (\*) in the property names are supported.

You can sort by the following properties:

- Name

- DisplayName



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

[Online Version](https://technet.microsoft.com/library/369800ff-fced-4d1c-adb0-1ddbe798670d.aspx)

