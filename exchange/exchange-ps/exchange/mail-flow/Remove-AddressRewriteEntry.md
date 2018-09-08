---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Remove-AddressRewriteEntry
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# Remove-AddressRewriteEntry

## SYNOPSIS
This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange.

Use the Remove-AddressRewriteEntry cmdlet to remove an existing address rewrite entry that's no longer needed on an Edge Transport server.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Remove-AddressRewriteEntry [-Identity] <AddressRewriteEntryIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
On Edge Transport servers, you need to be a member of the local Administrators group to run this cmdlet.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-AddressRewriteEntry "Address rewrite entry for contoso.com"
```

This example removes a specific address rewrite entry.

### -------------------------- Example 2 --------------------------
```
Get-AddressRewriteEntry | Where {$_.InternalAddress -like '*contoso.com'} | Remove-AddressRewriteEntry
```

This example removes all address rewrite entries that include contoso.com in the domain name. It accomplishes the following:

- Retrieves all address rewrite entries.

- Filters the result for entries that have contoso.com or its subdomains as the internal address.

- Removes the filtered entries.

## PARAMETERS

### -Identity
The Identity parameter specifies the address rewrite entry you want to remove. The Identity parameter accepts a GUID or the unique address rewrite name. You can omit the Identity parameter label.

```yaml
Type: AddressRewriteEntryIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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

[Online Version](https://technet.microsoft.com/library/a588e988-3f80-42c6-aae0-8efaf2f439b3.aspx)
