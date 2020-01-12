---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
applicable: Exchange Online
title: Get-EXOCasMailbox
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer: navgupta
monikerRange: "exchonline-ps"
---

# Get-EXOCasMailbox

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/exchange-online-powershell-v2/exchange-online-powershell-v2).

Use the Get-EXOCasMailbox cmdlet to view the Client Access settings that are configured on mailboxes.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

### Identity (Default)
```
Get-EXOCasMailbox
 [[-Identity] <String>]
 [-Filter <String>]
 [-ExternalDirectoryObjectId <Guid>]
 [-OrganizationalUnit <String>]
 [-Properties <String[]>]
 [-PropertySets <PropertySet[]>]
 [-ProtocolSettings]
 [-ResultSize <Unlimited>]
 [-UserPrincipalName <String>]
 [<CommonParameters>]
```

### Anr
```
Get-EXOCasMailbox
 [-Anr <String>]
 [-Filter <String>]
 [-OrganizationalUnit <String>]
 [-Properties <String[]>]
 [-PropertySets <PropertySet[]>]
 [-ProtocolSettings]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns a variety of client access settings for one or more mailboxes. These settings include options for Outlook on the web, Exchange ActiveSync, POP3, and IMAP4.

## EXAMPLES

### Example 1
```powershell
Get-EXOCASMailbox -Identity "JeffHay@contoso.com"
```

This example returns the values of the following client access settings for the user with Identity Jeffhay@contoso.com:

- ActiveSyncEnabled

- EwsEnabled

- OWAEnabled

- PopEnabled

- ImapEnabled

- MAPIEnabled

- ECPEnabled

## PARAMETERS

### -Anr
The Anr parameter specifies a string on which to perform an ambiguous name resolution (ANR) search. You can specify a partial string and search for objects with an attribute that matches that string. The default attributes searched are:

- CommonName (CN)

- DisplayName

- FirstName

- LastName

- Alias

```yaml
Type: String
Parameter Sets: Anr
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDirectoryObjectId
The ExternalDirectoryObjectId parameter identifies the mailbox you want to view by using the ObjectId of the mailbox in Azure Active Directory. You can use this value instead of the Identity parameter.

```yaml
Type: Guid
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Filter
The Filter parameter uses OPath syntax to filter the results by the specified properties and values. The search criteria uses the syntax `"Property -ComparisonOperator 'Value'"`.

- Enclose the whole OPath filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.

- Property is a filterable property. For more information about the filterable properties, see [Get-EXOCasMailbox property sets](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/cmdlet-property-sets#get-exocasmailbox-property-sets) and [Filterable properties for the Filter parameter](https://docs.microsoft.com/powershell/exchange/exchange-server/recipient-filters/filter-properties).

- ComparisonOperator is an OPath comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://go.microsoft.com/fwlink/p/?LinkId=620712).

- Value is the property value to search for. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values (for example, `500`, `$true`, `$false`, or `$null`).

You can chain multiple search criteria together using the logical operators `-and` and `-or`. For example, `"Criteria1 -and Criteria2"` or `"(Criteria1 -and Criteria2) -or Criteria3"`.

For detailed information about OPath filters in Exchange, see [Additional OPATH syntax information](https://docs.microsoft.com/powershell/exchange/exchange-server/recipient-filters/recipient-filters#additional-opath-syntax-information).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the mailbox you want to view. You can use any value that uniquely identifies the mailbox. For example:

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

**Note**: This parameter doesn't support Name or Alias values.

You can't use this parameter with the Anr parameter.

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -OrganizationalUnit
The OrganizationalUnit parameter filters the results based on the object's location in Active Directory. Only objects that exist in the specified location are returned. Valid input for this parameter is an organizational unit (OU) or domain that's visible using the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name

- Canonical name

- Distinguished name (DN)

- GUID

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Properties
The Properties parameter specifies the properties that are returned in the output of this cmdlet. You can specify multiple values separated by commas. Wildcards ( * ) are supported.

For more information about the available properties, see [Get-EXOCasMailbox property sets](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/cmdlet-property-sets#get-exocasmailbox-property-sets).

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertySets
The PropertySets parameter specifies a logical grouping of properties that are returned in the output of this cmdlet. Valid values are:

- Minimum (this is the default value)

- ActiveSync

- Ews

- Imap

- Mapi

- Pop

- ProtocolSettings

- All

You can specify multiple values separated by commas. Wildcards ( * ) are supported.

For more information about the properties that are included in each property set, see [Get-EXOCasMailbox property sets](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/cmdlet-property-sets#get-exocasmailbox-property-sets).

```yaml
Type: PropertySet[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProtocolSettings
The ProtocolSettings switch returns the server names, TCP ports and encryption methods for the following settings:

- ExternalImapSettings

- InternalImapSettings

- ExternalPopSettings

- InternalPopSettings

- ExternalSmtpSettings

- InternalSmtpSettings

To see these values, you need to use a formatting cmdlet. For example, Get-CasMailbox laura@contoso.com -ProtocolSettings | Format-List.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName
The UserPrincipalName parameter specifies the UPN for the mailbox you want to view (for example, navin.contoso.com).

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
The following Input parameters are not supported in Get-EXOCasMailbox:

- IgnoreDefaultScope

- ReadIsOptimizedForAccessibility

- SortBy

- GetImapProtocolLog

- GetPopProtocolLog

- SendLogsTo

## OUTPUTS

###  
The following properties are removed by design from Get-EXOCasMailbox output:

- RunspaceId

- Servername

- OriginatingServer

- IsValid

## NOTES

## RELATED LINKS

[Online Version](https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/get-exocasmailbox)
