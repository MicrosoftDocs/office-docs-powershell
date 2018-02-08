---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-ActiveSyncDeviceClass

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-ActiveSyncDeviceClass cmdlet to retrieve a list of mobile phones or devices that have connected to the servers running Microsoft Exchange Server 2010 in an organization. The cmdlet returns the mobile phone or device type and model information.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-ActiveSyncDeviceClass cmdlet to retrieve a list of mobile devices that have connected to the servers running Microsoft Exchange Server 2013 in an organization. The cmdlet returns the mobile device type and model information.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-ActiveSyncDeviceClass cmdlet to retrieve a list of ActiveSync devices that have connected to your organization. The cmdlet returns the mobile device type and model information.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-ActiveSyncDeviceClass [[-Identity] <ActiveSyncDeviceClassIdParameter>] [-DomainController <Fqdn>]
 [-Filter <String>] [-Organization <OrganizationIdParameter>] [-SortBy <String>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You can use this cmdlet to view a list of mobile phones or devices by type. For example, you can return a list of all Apple iPhone mobile digital devices in the organization or all Windows Mobile devices with the DeviceType of PocketPC.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Exchange ActiveSync settings" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

You can use this cmdlet to view a list of mobile phones or devices by type. For example, you can return a list of all Android mobile digital devices in the organization or all Windows Phone devices in the organization.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Exchange ActiveSync settings" entry in the Clients and mobile devices permissions topic.

!!! Exchange Server 2016, Exchange Online

You can use this cmdlet to view a list of mobile phones or devices by type. For example, you can return a list of all Android mobile digital devices in the organization or all Windows Phone devices in the organization.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-ActiveSyncDeviceClass -Filter {DeviceType -eq "PocketPC"}
```

This example returns a list of all devices with the DeviceType of PocketPC.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-ActiveSyncDeviceClass -Filter {DeviceType -eq "PocketPC"}
```

This example returns a list of all devices with the DeviceType of PocketPC.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-ActiveSyncDeviceClass -Filter {DeviceType -eq "WP"}
```

This example returns a list of all Windows Phones.

### Example 1 -------------------------- (Exchange Online)
```
Get-ActiveSyncDeviceClass -Filter {DeviceType -eq "WP"}
```

This example returns a list of all Windows Phones.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-ActiveSyncDeviceClass | group-object -property DeviceType
```

This example lists all device types within the organization along with a count of the number of devices of each type present.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-ActiveSyncDeviceClass | group-object -property DeviceType
```

This example lists all device types within the organization along with a count of the number of devices of each type present.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-ActiveSyncDeviceClass | group-object -property DeviceType
```

This example lists all device types within the organization along with a count of the number of devices of each type present.

### Example 2 -------------------------- (Exchange Online)
```
Get-ActiveSyncDeviceClass | group-object -property DeviceType
```

This example lists all device types within the organization along with a count of the number of devices of each type present.

## PARAMETERS

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
!!! Exchange Server 2010, Exchange Server 2013

The Filter parameter specifies the attribute by which to filter the data. The following attributes are supported:

- DeviceType

- DeviceModel



!!! Exchange Server 2016, Exchange Online

The Filter parameter uses OPATH filter syntax to filter the results by the specified properties and values. The search criteria uses the syntax {\<Property\> -\<Comparison operator\> '\<Value\>'}.

- \<Property\> is a filterable property.

- -\<Comparison Operator\> is an OPATH comparison operator. For example -eq for equals and -like for string comparison. For more information about comparison operators, see about\_Comparison\_Operators (https://go.microsoft.com/fwlink/p/?LinkId=620712).

- \<Value\> is the property value. Text values with or without spaces need to be enclosed in quotation marks ('\<Value\>'). Don't use quotation marks with integers or the system values $true, $false, or $null.

You can chain multiple search criteria together using the logical operators -and and -or. For example, {\<Criteria1\>) -and \<Criteria2\>} or {(\<Criteria1\> -and \<Criteria2\>) -or \<Criteria3\>}.

You can filter by the following properties:

- DeviceModel

- DeviceType

- LastUpdateTime



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies the group of devices on which to scope the task.



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the ActiveSync device class that you want to view. You can use any value that uniquely identifies the ActiveSync device class. For example:

- Name

- Distinguished name (DN)

- GUID



```yaml
Type: ActiveSyncDeviceClassIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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

### -SortBy
!!! Exchange Server 2010, Exchange Server 2013

The SortBy parameter specifies the attribute by which to sort the results. You can sort by only one attribute at a time. You can sort by the following attributes:

- DeviceType

- DeviceModel

The results are sorted in ascending order.



!!! Exchange Server 2016, Exchange Online

The SortBy parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order.

If the default view doesn't include the property you're sorting by, you can append the command with | Format-Table -Auto \<Property1\>,\<Property2\>... to create a new view that contains all of the properties that you want to see. Wildcards (\*) in the property names are supported.

You can sort by the following properties:

- DeviceModel

- DeviceType

- LastUpdateTime



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/f87f0260-b1f3-4315-b71b-e381bd0ebc15.aspx)

