---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Get-AuthRedirect
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Get-AuthRedirect

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-AuthRedirect cmdlet to view OAuth redirection objects that are used for legacy Microsoft Exchange 2010 Client Access servers in your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-AuthRedirect [[-Identity] <AuthRedirectIdParameter>] [-DomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
Exchange 2010 Client Access servers don't support OAuth authentication requests. OAuth redirection objects redirect OAuth authentication requests to Exchange servers that are running later versions of Exchange. This cmdlet is only useful if your organization has Exchange 2010 Client Access servers.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-AuthRedirect
```

This example shows a summary list of all the OAuth redirection objects.

### -------------------------- Example 2 --------------------------
```
Get-AuthRedirect AuthRedirect-Bearer-C0B7AC3F-FE64-4B4B-A907-9226F8027CCE | Format-List
```

This example shows detailed information about the OAuth redirection object named AuthRedirect-Bearer-C0B7AC3F-FE64-4B4B-A907-9226F8027CCE

## PARAMETERS

### -DomainController
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

### -Identity
The Identity parameter specifies the existing OAuth redirection object that you want to view. The object name uses the syntax AuthRedirect-Bearer-\<GUID\>.

```yaml
Type: AuthRedirectIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/531fc365-3b67-4fd8-abd2-d9795c82decb.aspx)
