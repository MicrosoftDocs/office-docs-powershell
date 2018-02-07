---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-OutlookProvider

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-OutlookProvider cmdlet to obtain the global settings from the AutoDiscoverConfig object under the Global Settings object in Active Directory.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Get-OutlookProvider cmdlet to obtain the global settings from the AutoDiscoverConfig object under the Global Settings object in Active Directory.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-OutlookProvider [[-Identity] <OutlookProviderIdParameter>] [-DomainController <Fqdn>]
 [-Organization <OrganizationIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Get-OutlookProvider cmdlet gets the global settings from the AutoDiscoverConfig object in Active Directory and returns an OutlookProvider object to be managed in the Exchange Management Console.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Autodiscover service configuration settings" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

The Get-OutlookProvider cmdlet gets the global settings from the AutoDiscoverConfig object in Active Directory and returns an OutlookProvider object to be managed in the Exchange Administration Center.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Autodiscover service configuration settings" entry in the Clients and mobile devices permissions topic.

!!! Exchange Server 2016

The Get-OutlookProvider cmdlet gets the global settings from the AutoDiscoverConfig object in Active Directory and returns an OutlookProvider object to be managed in the Exchange admin center.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-OutlookProvider -Identity EXCH | Format-List
```

This example obtains the protocol settings for the MAPI protocol named EXCH and pipes the output to display each setting on a separate line.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-OutlookProvider -Identity WEB | Format-List
```

This example obtains the protocol settings for the web protocol named WEB and pipes the output to display each setting on a separate line.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-OutlookProvider
```

This example returns a summary list of all available Outlook providers.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-OutlookProvider -Identity WEB | Format-List
```

This example returns detailed information for the Outlook provider namedWEB.

## PARAMETERS

### -DomainController
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

### -Identity
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies the ADIDParameter value of the MAPI protocol for which you want to obtain global settings.



!!! Exchange Server 2016

The Identity parameter specifies the ADIDParameter value of the MAPI protocol that you want to view. Typical values are:

- EXCH

- EXPR

- WEB



```yaml
Type: OutlookProviderIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/cb46009b-ee6c-4c84-8534-4fb74c32d2eb.aspx)

