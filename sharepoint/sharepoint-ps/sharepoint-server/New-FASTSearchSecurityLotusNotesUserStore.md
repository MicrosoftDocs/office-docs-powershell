---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: New-FASTSearchSecurityLotusNotesUserStore
---

# New-FASTSearchSecurityLotusNotesUserStore

## SYNOPSIS
Creates a FAST Search Server 2010 for SharePoint security user store to provide security for Lotus Notes content.

## SYNTAX

```
New-FASTSearchSecurityLotusNotesUserStore [-Identity] <String>
 [[-NonIndexableCharacterEncodingPrefix] <String>] [[-NonIndexableCharacterPattern] <String>]
 [[-Description] <String>] [[-UseDenyOnDefault] <Boolean>] [[-UseDocumentSecurity] <Boolean>]
 [[-UseWildcardSecurity] <Boolean>] [[-UseViewSecurity] <Boolean>] [[-AllowPrefix] <String>]
 [[-DenyPrefix] <String>] [[-NonIndexableCharacterHandling] <String>] [-ObjectToClone <LotusNotesUserStore>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet configures FAST Search Server 2010 for SharePoint security for Lotus Notes content.

A Lotus Notes security user store uses a user-dependent query filter that is applied to each query to enforce the defined access control policies based on indexed values.
The Lotus Notes security user store search filter requires that the user has read access to both the item and the database to view a specific item.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
PS C:\>new-FASTSearchSecurityLotusNotesUserStore ln1
```

This example creates a new security Lotus Notes user store with a user store identity of "ln1".

This example uses default values for all parameters except the required Identity parameter.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
PS C:\>Get-FASTSearchSecurityLotusNotesUserStore -Identity ln1 | New-FASTSearchSecurityLotusNotesUserStore -Identity ln3 -UseViewSecurity $true
```

This example creates a new Lotus Notes user store with an identity of "ln3" and enables view level security.
The New-FASTSearchSecurityLotusNotesUserStore command uses the ObjectToClone object on the pipeline as input to the New command for default parameter values.

## PARAMETERS

### -Identity
User store identity.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Description
A brief explanation of the user store.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -UseDenyOnDefault
If true, support for default access with deny on users/groups is enabled on database level security.

You must enable this filter for an inverse security model: first grant access to everyone, and then explicitly deny access to certain groups or users.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 3
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -UseDocumentSecurity
If true, item security is enabled (i.e., the filter contains an item level security condition).

If set to false, item level security is ignored; only database level security (and possibly view security) is used.

If items always inherit the ACLs of the database, you can turn off this option.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 4
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -UseWildcardSecurity
If true, database access through wildcard group entry (starting with */) is enabled.

If set to false, the wildcard check is ignored.
Only normal groups are checked against the database ACL.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 5
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -UseViewSecurity
If true, view security is enabled (i.e., the filter contains a view level security condition).

If set to false, view level security is ignored; only database level security (and possibly item security) is used.

If views always inherit the ACLs of the database, or if views are not indexed, you can turn off this option.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 6
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -AllowPrefix
A string value prepended to the document ACL to control which items the user is allowed access to and which items will be returned in the query.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 7
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -DenyPrefix
A string value prepended to the ACL to control which items the user is denied access to and which items are not returned from the query.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 8
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -NonIndexableCharacterHandling
Specifies what to do with ACL values that match the NonIndexableCharacterRegExPattern regular expression.

Valid values:

-- encode - The ACL is encoded into a single searchable term.
-- encodeWithPrefix - The value of NonIndexableEncodedPrefix is concatenated with the ACL to be encoded, producing a single searchable term.
-- remove - The ACL is removed from both allowing and denying access. Specify "remove" if the ACL is never used to deny access.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 9
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -NonIndexableCharacterEncodingPrefix
If NonIndexableCharacterHandling is set to encodeWithPrefix, this parameter specifies the prefix added to the encoded ACL.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 10
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -NonIndexableCharacterPattern
Specifies a regular expression pattern used to detect non-indexable characters in an ACL.

Identities matching this regular expression pattern will be processed based on NonIndexableCharacterHandling.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 11
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -ObjectToClone
A Lotus Notes user store object whose property values are used as a baseline for the Lotus Notes user store being created.

```yaml
Type: LotusNotesUserStore
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-FASTSearchSecurityLotusNotesUserStore](Set-FASTSearchSecurityLotusNotesUserStore.md)

[Get-FASTSearchSecurityLotusNotesUserStore](Get-FASTSearchSecurityLotusNotesUserStore.md)

