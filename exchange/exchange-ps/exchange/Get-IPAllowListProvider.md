---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-IPAllowListProvider

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-IPAllowListProvidercmdlet to view the configuration information for the IP Allow list provider configuration on a computer that has the Edge Transport server role or the Hub Transport server role installed.

!!! Exchange Server 2013

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange Server 2013.

Use the Get-IPAllowListProvider cmdlet to view IP Allow list providers that are used by the Connection Filtering agent on Edge Transport servers.

!!! Exchange Server 2016

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange.

Use the Get-IPAllowListProvider cmdlet to view IP Allow list providers that are used by the Connection Filtering agent on Edge Transport servers.

## SYNTAX

```
Get-IPAllowListProvider [[-Identity] <IPAllowListProviderIdParameter>] [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The IP Allow list provider configuration is used by the Connection Filter agent. The Connection Filter agent acts on the IP address of the remote server that initiates the SMTP connection to determine what action, if any, to take on an incoming message.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Anti-spam features" entry in the Transport Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Anti-spam features - Edge Transport" entry in the Anti-spam and anti-malware permissions topic.

!!! Exchange Server 2016

On Edge Transport servers, you need to be a member of the local Administrators group to run this cmdlet.

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-IPAllowListProvider
```

This example returns all IP Allow list providers configured on the computer.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-IPAllowListProvider
```

This example returns a summary list of all IP Allow list providers.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-IPAllowListProvider
```

This example returns a summary list of all IP Allow list providers.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-IPAllowListProvider -Identity Contoso.com
```

This example returns the configuration for the IP Allow list provider Contoso.com.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-IPAllowListProvider Contoso.com | Format-List
```

This example returns detailed information for the IP Allow list provider named Contoso.com.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-IPAllowListProvider Contoso.com | Format-List
```

This example returns detailed information for the IP Allow list provider named Contoso.com.

## PARAMETERS

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

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the IP Allow list provider. This parameter can be assigned a string value, which is theProviderName value, or a GUID.



!!! Exchange Server 2013, Exchange Server 2016

The Identity parameter specifies the IP Allow list provider that you want to view. You can use any value that uniquely identifies the IP Allow list provider. For example:

- Name

- Distinguished name (DN)

- GUID



```yaml
Type: IPAllowListProviderIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
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

[Online Version](https://technet.microsoft.com/library/966bbf6d-5ca9-4888-be64-0bb83913e5b1.aspx)

