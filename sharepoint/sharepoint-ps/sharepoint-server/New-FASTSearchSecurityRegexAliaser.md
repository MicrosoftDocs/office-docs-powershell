---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: New-FASTSearchSecurityRegexAliaser
---

# New-FASTSearchSecurityRegexAliaser

## SYNOPSIS
Creates a regular expression aliaser.

## SYNTAX

```
New-FASTSearchSecurityRegexAliaser [-InputUserStoreId] <String> [-OutputUserStoreIds] <String[]>
 [-Patterns] <System.Collections.Generic.List`1[Microsoft.SharePoint.Search.Extended.Security.Config.RegExAliasPatternMapConfig]>
 [[-Identity] <String>] [[-CaseSensitive] <Boolean>] [[-UnicodeCaseSensitive] <Boolean>]
 [-ObjectToClone <SecurityRegexAliaser>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a regular expression aliaser to map users/groups from one user store to users/groups in other user stores, based on a regular expression pattern.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>New-FASTSearchSecurityRegexAliaserPattern -Regex .* -MapToUsername \1 | New-FASTSearchSecurityRegexAliaser -Identity regex1 -InputUserStoreId ln1 -OutputUserStoreIds ln2
```

This example creates a regular expression aliaser pattern object and pipes it into a New-FASTSearchSecurityRegexAliaser cmdlet to create a regular expression aliaser.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>New-FASTSearchSecurityRegexAliaserPattern -Regex .* -MapToUsername \1 | New-FASTSearchSecurityRegexAliaser -InputUserStoreId ln1 -OutputUserStoreIds ln2,ln3 -CaseSensitive $False -UnicodeCaseSensitive $False
```

This example creates a regular expression aliaser pattern object and pipes it into a New-FASTSearchSecurityRegexAliaser cmdlet to create a regular expression aliaser.
The example sets the case-sensitive flags so pattern matching is performed in a case-insensitive manner.
The OutputUserStoreIds parameter maps users/groups to two user stores: "ln2" and "ln3".
The example generates the aliaser identity.

## PARAMETERS

### -InputUserStoreId
The identity of the mapped-from user store.

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

### -OutputUserStoreIds
A comma-separated list of mapped-to user store identities.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Patterns
A list of RegExAliasPatternMapConfig instances containing the regular expression patterns used for the mapping.

```yaml
Type: System.Collections.Generic.List`1[Microsoft.SharePoint.Search.Extended.Security.Config.RegExAliasPatternMapConfig]
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: 3
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Identity
The identity of the aliaser.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CaseSensitive
Specifies whether the regular expression patterns defined in the RegExAliasPatternMapConfig list are matched based on case sensitivity matching rules.
The default is true.

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

### -UnicodeCaseSensitive
Specifies whether the regular expressions patterns defined in the RegExAliasPatternMapConfig list are matched based on Unicode case sensitivity matching rules.

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

### -ObjectToClone
A SecurityRegexAliaser object whose property values are used for the SecurityRegexAliaser aliaser being created.

```yaml
Type: SecurityRegexAliaser
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

[Set-FASTSearchSecurityRegexAliaser]()

[Get-FASTSearchSecurityRegexAliaser]()

[New-FASTSearchSecurityRegexAliaserPattern]()

