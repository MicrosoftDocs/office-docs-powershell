---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-SendConnector

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-SendConnector cmdlet to view the configuration information for a Send connector on a computer that has the Hub Transport server role or the Edge Transport server role installed.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Get-SendConnector cmdlet to view the settings for a Send connector.

## SYNTAX

```
Get-SendConnector [[-Identity] <SendConnectorIdParameter>] [-DomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Send connectors" entry in the Transport Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Send connectors" entry in the Mail flow permissions topic.

!!! Exchange Server 2016

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-SendConnector "Contoso.com Send Connector" | Format-List
```

This example displays detailed information about the Send connector Contoso.com Send Connector.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-SendConnector "Contoso.com Send Connector" | Format-List
```

This example displays detailed information about the Send connector named Contoso.com Send Connector.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-SendConnector "Contoso.com Send Connector" | Format-List
```

This example displays detailed information about the Send connector named Contoso.com Send Connector.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the administrator-supplied name or the system-generated GUID of the Send connector. You can omit the Identity parameter label so that only the connector name or GUID is supplied. You can also include the server name by using the format ServerName\\ConnectorName.



!!! Exchange Server 2013, Exchange Server 2016

The Identity parameter specifies the name, or GUID of the Send connector. If the Identity name contains spaces, enclose the name in quotation marks ("). You can omit the Identity parameter label. You can also include the server name by using the format ServerName\\ConnectorName.



```yaml
Type: SendConnectorIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

[Online Version](https://technet.microsoft.com/library/ca71bbd3-14db-4196-a265-0938efead108.aspx)

