---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-activesyncdevice
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Get-ActiveSyncDevice
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-ActiveSyncDevice

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-ActiveSyncDevice cmdlet to retrieve the list of devices in your organization that have active Exchange ActiveSync partnerships.

Note: In Exchange 2013 or later, use the Get-MobileDevice cmdlet instead. If you have scripts that use Get-ActiveSyncDevice, update them to use Get-MobileDevice.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Mailbox
```
Get-ActiveSyncDevice -Mailbox <MailboxIdParameter>
 [-DomainController <Fqdn>]
 [-Filter <String>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-ResultSize <Unlimited>]
 [-SortBy <String>] [-Monitoring] [<CommonParameters>]
```

### Identity
```
Get-ActiveSyncDevice [[-Identity] <ActiveSyncDeviceIdParameter>]
 [-DomainController <Fqdn>]
 [-Filter <String>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-ResultSize <Unlimited>]
 [-SortBy <String>] [-Monitoring] [<CommonParameters>]
```

## DESCRIPTION
The Get-ActiveSyncDevice cmdlet returns identification, configuration and status information for each device.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ActiveSyncDevice -Identity "TonySmith"
```

This example returns all the Exchange ActiveSync mobile devices that Tony Smith has used that are associated with his mailbox.

### Example 2
```powershell
Get-ActiveSyncDevice -Mailbox "Redmond\TonySmith"
```

This example returns all the Exchange ActiveSync mobile devices that Tony Smith has used that are associated with his mailbox.

## PARAMETERS

### -Mailbox
The Mailbox parameter specifies the mailbox that has the associated ActiveSync device that you want to view. You can use any value that uniquely identifies the mailbox. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: Mailbox
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
The Filter parameter uses OPath syntax to filter the results by the specified properties and values. The search criteria uses the syntax `"Property -ComparisonOperator 'Value'"`.

- Enclose the whole OPath filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.

- Property is a filterable property.

- ComparisonOperator is an OPath comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_comparison_operators).

- Value is the property value to search for. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values (for example, `500`, `$true`, `$false`, or `$null`).

You can chain multiple search criteria together using the logical operators `-and` and `-or`. For example, `"Criteria1 -and Criteria2"` or `"(Criteria1 -and Criteria2) -or Criteria3"`.

For detailed information about OPath filters in Exchange, see [Additional OPATH syntax information](https://docs.microsoft.com/powershell/exchange/recipient-filters#additional-opath-syntax-information).

You can filter by the following properties:

- ClientType

- DeviceAccessControlRule

- DeviceAccessState

- DeviceAccessStateReason

- DeviceActiveSyncVersion

- DeviceId

- DeviceImei

- DeviceMobileOperator

- DeviceModel

- DeviceOS

- DeviceOSLanguage

- DeviceTelephoneNumber

- DeviceType

- DeviceUserAgent

- FirstSyncTime

- FriendlyName

- ProvisioningFlags

- UserDisplayName

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the ActiveSync device that you want to view. You can use any value that uniquely identifies the device. For example:

- GUID

- DeviceIdentity

- Multi-TenantID

```yaml
Type: ActiveSyncDeviceIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Monitoring
This parameter is available only in on-premises Exchange.

The Monitoring switch is required to return monitoring mailboxes in the results. You don't need to specify a value with this switch.

Monitoring mailboxes are associated with managed availability and the Exchange Health Manager service, and have a RecipientTypeDetails property value of MonitoringMailbox.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationalUnit
The OrganizationalUnit parameter filters the results based on the object's location in Active Directory. Only objects that exist in the specified location are returned. Valid input for this parameter is an organizational unit (OU) or domain that's returned by the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name

- Canonical name

- Distinguished name (DN)

- GUID

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SortBy
The SortBy parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order.

If the default view doesn't include the property you're sorting by, you can append the command with | Format-Table -Auto \<Property1\>,\<Property2\>... to create a new view that contains all of the properties that you want to see. Wildcards (\*) in the property names are supported.

You can sort by the following properties:

- DeviceAccessControlRule

- DeviceAccessState

- DeviceAccessStateReason

- DeviceId

- DeviceImei

- DeviceMobileOperator

- DeviceModel

- DeviceOS

- DeviceOSLanguage

- DeviceTelephoneNumber

- DeviceType

- DeviceUserAgent

- FirstSyncTime

- FriendlyName

- UserDisplayName

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
