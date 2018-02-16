---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Set-FASTSearchSecurityLotusNotesUserStore
---

# Set-FASTSearchSecurityLotusNotesUserStore

## SYNOPSIS
Updates a Lotus Notes user store.

## SYNTAX

```
Set-FASTSearchSecurityLotusNotesUserStore [-Identity] <String> [[-SecurityContent] <LotusNotesUserStore>]
 [[-NonIndexableCharacterEncodingPrefix] <String>] [[-NonIndexableCharacterPattern] <String>]
 [[-Description] <String>] [[-UseDenyOnDefault] <Boolean>] [[-UseDocumentSecurity] <Boolean>]
 [[-UseWildcardSecurity] <Boolean>] [[-UseViewSecurity] <Boolean>] [[-AllowPrefix] <String>]
 [[-DenyPrefix] <String>] [[-NonIndexableCharacterHandling] <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet updates the configuration settings for a Lotus Notes user store.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Set-FASTSearchSecurityLotusNotesUserStore -Identity ln4 -Description "My Lotus user store"
```

This example updates the description of the "ln4" Lotus Notes user store.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchSecurityLotusNotesUserStore -Identity ln3 | Set-FASTSearchSecurityLotusNotesUserStore -UseDocumentSecurity $false
```

This example sets the UseDocumentSecurity of the "ln3" Lotus Notes user store to false to skip item level security.

In this case, only database level security is used.
The Set-FASTSearchSecurityLotusNotesUserStore command updates the SecurityContent object piped from the Get-FASTSearchSecurityLotusNotesUserStore.

## PARAMETERS

### -Identity
Identity of the Lotus Notes user store to update.

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

### -SecurityContent
A Lotus Notes user store object whose property values are used for the Lotus Notes user store being updated.

```yaml
Type: LotusNotesUserStore
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
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
Accept pipeline input: False
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
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDocumentSecurity
If true, item security is enabled (i.e., the filter contains a item level security condition).

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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-FASTSearchSecurityLotusNotesUserStore](Get-FASTSearchSecurityLotusNotesUserStore.md)

[New-FASTSearchSecurityLotusNotesUserStore](New-FASTSearchSecurityLotusNotesUserStore.md)

