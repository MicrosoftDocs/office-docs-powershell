---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-X400AuthoritativeDomain

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-X400AuthoritativeDomain cmdlet to view the configuration information for the X.400 authoritative domains configured in your organization. For more information about how to configure an X.400 authoritative domain, see Set-X400AuthoritativeDomain.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Get-X400AuthoritativeDomain cmdlet to view the configuration information for the X.400 authoritative domains configured in your organization. For more information about how to configure an X.400 authoritative domain, see Set-X400AuthoritativeDomain.

## SYNTAX

```
Get-X400AuthoritativeDomain [[-Identity] <X400AuthoritativeDomainIdParameter>] [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "X.400 domains" entry in the Transport Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "X.400 domains" entry in the Mail flow permissions topic.

!!! Exchange Server 2016

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-X400AuthoritativeDomain "Europe Sales X.400 Domain" | Format-List
```

This example displays detailed information about the X.400 authoritative domain Europe Sales X.400 Domain.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-X400AuthoritativeDomain "Europe Sales X.400 Domain" | Format-List
```

This example displays detailed information about the X.400 authoritative domain Europe Sales X.400 Domain.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-X400AuthoritativeDomain "Europe Sales X.400 Domain" | Format-List
```

This example displays detailed information about the X.400 authoritative domain Europe Sales X.400 Domain.

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
The Identity parameter specifies a string value for the X.400 authoritative domain. Enter either the GUID or the name of the remote domain.

```yaml
Type: X400AuthoritativeDomainIdParameter
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

[Online Version](https://technet.microsoft.com/library/a14fa481-2d32-4031-bc9b-098bd4108118.aspx)

