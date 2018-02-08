---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-ClientAccessServer

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-ClientAccessServer cmdlet to return information for the Client Access server.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Get-ClientAccessServer cmdlet to return information for the Client Access server.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Get-ClientAccessServer cmdlet to view settings that are associated with the Client Access server role.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-ClientAccessServer [[-Identity] <ClientAccessServerIdParameter>] [-DomainController <Fqdn>]
 [-IncludeAlternateServiceAccountCredentialPassword] [-IncludeAlternateServiceAccountCredentialStatus]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Client Access server role is one of five server roles that can be installed on a computer running Microsoft Exchange Server 2010. The Get-ClientAccessServer cmdlet returns information about all Client Access servers.

The ExchangeVersion attribute returned is the minimum version of Exchange that you can use to manage the returned object. This attribute isn't the same as the version of Exchange displayed in the Exchange Management Console when you select Server Configuration.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Client Access server settings" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

The Client Access server is one of two server types that can be installed with Microsoft Exchange Server 2013. The Get-ClientAccessServer cmdlet returns information about all Client Access servers in the organization.

The ExchangeVersion attribute returned is the minimum version of Exchange that you can use to manage the returned object.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Client Access server settings" entry in the Clients and mobile devices permissions topic.

!!! Exchange Server 2016

The Get-ClientAccessServer cmdlet will be removed in a future version of Exchange. You should use the Get-ClientAccessService cmdlet instead.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-ClientAccessServer -Identity "mail.contoso.com"
```

This example returns information about the Exchange Client Access server with the FQDN of mail.contoso.com.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-ClientAccessServer -Identity "mail.contoso.com"
```

This example returns information about the Exchange Client Access server with the FQDN of mail.contoso.com.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-ClientAccessServer
```

This example returns a summary list of all Exchange servers in your organization that have the Client Access server role installed.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-ClientAccessServer
```

This example returns information about all computers running Exchange that have the Client Access server role installed.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-ClientAccessServer
```

This example returns information about all computers running Exchange that have the Client Access server role installed.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-ClientAccessServer -Identity mail.contoso.com | Format-List
```

This example returns detailed information for the server mail.contoso.com.

### Example 3 -------------------------- (Exchange Server 2010)
```
Get-ClientAccessServer -Identity "email.fourthcoffee.com"
```

This example returns information about the Exchange Client Access server with the FQDN of email.fourthcoffee.com.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-ClientAccessServer -Identity "email.fourthcoffee.com"
```

This example returns information about the Exchange Client Access server with the FQDN of email.fourthcoffee.com.

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
!!! Exchange Server 2010

The Identity parameter specifies the name of the Exchange server that has the Client Access server role installed.



!!! Exchange Server 2013

The Identity parameter specifies the name of the Exchange Client Access server.



!!! Exchange Server 2016

The Identity parameter specifies the server with the Client Access server role installed that you want to view.

You can use any value that uniquely identifies the server. For example:

- Name (for example, Exchange01)

- Distinguished name (DN) (for example, CN=Exchange01,CN=Servers,CN=Exchange Administrative Group (FYDIBOHF23SPDLT),CN=Administrative Groups,CN=First Organization,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com)

- Exchange Legacy DN (for example, /o=First Organization/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=Exchange01)

- GUID (for example, bc014a0d-1509-4ecc-b569-f077eec54942)



```yaml
Type: ClientAccessServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IncludeAlternateServiceAccountCredentialPassword
!!! Exchange Server 2010, Exchange Server 2013

The IncludeAlternateServiceAccountCredentialPassword parameter specifies whether the credential password should be included with the request.



!!! Exchange Server 2016

The IncludeAlternateServiceAccountCredentialPasswordswitch specifies whether to include the password of the alternate service account in the results. You don't need to specify a value with this switch.

The password is visible in the AlternateServiceAccountConfiguration property. To see this property, use the Format-List cmdlet. For example, Get-ClientAccessServer \<ServerIdentity\> | Format-List AlternateServiceAccountConfiguration.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeAlternateServiceAccountCredentialStatus
!!! Exchange Server 2010, Exchange Server 2013

The IncludeAlternateServiceAccountCredentialStatus parameter specifies whether the status of the service account credential should be included with the request.



!!! Exchange Server 2016

The IncludeAlternateServiceAccountCredentialStatus parameter specifies whether to include the status of the alternate service account in the results. You don't need to specify a value with this switch.

The status is visible in the AlternateServiceAccountConfiguration property. To see this property, use the Format-List cmdlet. For example, Get-ClientAccessServer \<ServerIdentity\> | Format-List AlternateServiceAccountConfiguration.



```yaml
Type: SwitchParameter
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

[Online Version](https://technet.microsoft.com/library/db492f66-cd67-420d-9479-a9499e9301b2.aspx)

