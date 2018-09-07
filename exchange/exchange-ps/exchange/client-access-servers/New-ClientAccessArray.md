---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010
title: New-ClientAccessArray
schema: 2.0.0
monikerRange: "exchserver-ps-2010"
---

# New-ClientAccessArray

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the New-ClientAccessArray cmdlet to create an object that represents a load balanced array of Client Access servers within a single Active Directory site.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-ClientAccessArray [[-Name] <String>] -Fqdn <Fqdn> -Site <AdSiteIdParameter> [-Confirm]
 [-DomainController <Fqdn>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The New-ClientAccessArray cmdlet creates an object that represents a load balanced array of Client Access servers. You can then manage the load balanced array as a single object.

Client Access arrays allow Outlook clients in an Active Directory site to access the Client Access servers in the array by using RPC over TCP to a single, unified, fully qualified domain name (FQDN). The RpcClientAccessServer property of new mailbox databases is automatically populated with the FQDN of the Client Access array and this value is used during the creation of Outlook profiles for mailboxes in those databases.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-ClientAccessArray -Fqdn casarray01.contoso.com -Site "Redmond"
```

This example creates the Client Access array with the FQDN casarray01.contoso.com in the Active Directory site named Redmond. Because the Name parameter isn't used, the name of the Client Access array is casarray01.

### -------------------------- Example 2 --------------------------
```
New-ClientAccessArray -Fqdn casarrayap.contoso.com -Site "China" -Name "China CAS Array"
```

This example creates a Client Access array named China CAS Array with the FQDN value casarrayap.contoso.com in the Active Directory site named China.

## PARAMETERS

### -Fqdn
The Fqdn parameter specifies the fully qualified domain name of the Client Access array (for example, casarray01.contoso.com). This is the value that RPC over TCP clients use to connect to the Client Access servers in the array.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Site
The Site parameter specifies the Active Directory site that contains the Client Access array.  You can use any value that uniquely identifies the site. For example:

- Name

- Distinguished name (DN)

- GUID

To see a list of available sites, use the Get-ADSite cmdlet.

```yaml
Type: AdSiteIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, `Remove-*` cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, `New-*` and `Set-*` cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the descriptive name of the Client Access array. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks ("). If the value contains spaces, you can't use the Name value to identify the Client Access array for the Get-ClientAccessArray, Remove-ClientAccessArray, or Set-ClientAccessArray cmdlets.

If you don't use this parameter, the default value is the host part of the Fqdn parameter value. For example, if the Fqdn value is casarray01.contoso.com, the default name value is casarray01.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: 1
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

[Online Version](https://technet.microsoft.com/library/cc0a1328-5931-4160-8310-76f17b54d074.aspx)
