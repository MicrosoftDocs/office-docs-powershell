---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# get-addressrewriteentry

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-AddressRewriteEntry cmdlet to view an existing address rewrite entry that rewrites sender and recipient e-mail addresses in e-mail messages sent to or from an e-mail organization.

!!! Exchange Server 2013

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange Server 2013.

Use the Get-AddressRewriteEntry cmdlet to view an existing address rewrite entry that rewrites sender and recipient email addresses in messages sent to or sent from your organization through an Edge Transport server.

!!! Exchange Server 2016

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange.

Use the Get-AddressRewriteEntry cmdlet to view an existing address rewrite entry that rewrites sender and recipient email addresses in messages sent to or sent from your organization through an Edge Transport server.

## SYNTAX

```
get-addressrewriteentry [[-Identity] <AddressRewriteEntryIdParameter>] [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

With Microsoft Exchange Server 2010 address rewriting, you can modify the addresses of senders and recipients on messages that enter and leave an Exchange organization. You configure Address Rewriting agents on the Receive connector or Send connector on a computer that has the Edge Transport server role installed.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Address rewriting agent" entry in the Transport Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Address Rewriting - Edge Transport" entry in the Mail flow permissions topic.

!!! Exchange Server 2016

On Edge Transport servers, you need to be a member of the local Administrators group to run this cmdlet.

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-AddressRewriteEntry
```

This example shows how to view a summary listing of all address rewrite entries.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-AddressRewriteEntry
```

This example returns a summary listing of all address rewrite entries.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-AddressRewriteEntry
```

This example returns a summary listing of all address rewrite entries.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-AddressRewriteEntry "Address rewrite entry for contoso.com" | Format-List
```

This example shows how to view the detailed configuration of a single address rewrite entry by piping the results of the Get-AddressRewriteEntry command to the Format-List command.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-AddressRewriteEntry "Address rewrite entry for contoso.com" | Format-List
```

This example returns the detailed configuration of a single address rewrite entry by piping the results to the Format-List command.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-AddressRewriteEntry "Address rewrite entry for contoso.com" | Format-List
```

This example returns the detailed configuration of a single address rewrite entry by piping the results to the Format-List command.

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
The Identity parameter specifies the address rewrite entry to be retrieved. The Identity parameter accepts a GUID or the unique address rewrite name. You can omit the Identity parameter label.

```yaml
Type: AddressRewriteEntryIdParameter
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

[Online Version](https://technet.microsoft.com/library/633abc53-1719-42cb-bf56-077f38dd942e.aspx)

