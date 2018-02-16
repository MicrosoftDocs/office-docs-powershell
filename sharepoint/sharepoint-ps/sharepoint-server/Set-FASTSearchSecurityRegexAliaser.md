---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Set-FASTSearchSecurityRegexAliaser
---

# Set-FASTSearchSecurityRegexAliaser

## SYNOPSIS
Updates a regular expression aliaser.

## SYNTAX

```
Set-FASTSearchSecurityRegexAliaser [-Identity] <String> [-CaseSensitive <Boolean>] [-InputUserStoreId <String>]
 [-OutputUserStoreIds <String[]>]
 [-Patterns <System.Collections.Generic.List`1[Microsoft.SharePoint.Search.Extended.Security.Config.RegExAliasPatternMapConfig]>]
 [-RegexAliaser <SecurityRegexAliaser>] [-UnicodeCaseSensitive <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet updates the configuration settings for a regular expression aliaser to map users/groups from one user store to users/groups in other user stores, based on a regular expression pattern.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Set-FASTSearchSecurityRegexAliaser -Identity regex1 -OutputUserStoreIds ln2, ln3
```

This example modifies the output user store ids for the "regex1" regular expression aliaser.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>New-FASTSearchSecurityRegexAliaserPattern -Regex .* -InputPropertyName mail -MapToUsername "\1" | Set-FASTSearchSecurityRegexAliaser -Identity regexalias1
```

This example sets the regular expression pattern for the Regex Aliaser "regexalias1".
The regular expression pattern can be used to map the "mail" property of a Microsoft user store to identities in other user stores.

## PARAMETERS

### -Identity
The identity of the aliaser to update.

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

### -CaseSensitive
Specifies whether the regular expressions patterns defined in the RegExAliasPatternMapConfig list are matched based on case sensitivity matching rules.
The default is true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InputUserStoreId
The identity of the mapped-from user store.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutputUserStoreIds
A comma-separated list of mapped-to user store identities.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Patterns
List of RegExAliasPatternMapConfig instances containing the regular expression patterns using for the mapping.

Use the New-RegExAliasPatternMapConfig cmdlet to create patterns.

```yaml
Type: System.Collections.Generic.List`1[Microsoft.SharePoint.Search.Extended.Security.Config.RegExAliasPatternMapConfig]
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -RegexAliaser
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

### -UnicodeCaseSensitive
Specifies whether the regular expressions patterns defined in the RegExAliasPatternMapConfig list are matched based on Unicode case sensitivity matching rules.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
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

[New-FASTSearchSecurityRegexAliaser](New-FASTSearchSecurityRegexAliaser.md)

[Get-FASTSearchSecurityRegexAliaser](Get-FASTSearchSecurityRegexAliaser.md)

[New-FASTSearchSecurityRegexAliaserPattern](New-FASTSearchSecurityRegexAliaserPattern.md)

