---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: New-FASTSearchSecurityRegexAliaserPattern
---

# New-FASTSearchSecurityRegexAliaserPattern

## SYNOPSIS
Creates a new regular expression pattern for a regex principal aliaser.

## SYNTAX

```
New-FASTSearchSecurityRegexAliaserPattern [-Regex] <String> [-MapToUsername] <String>
 [[-InputPropertyName] <String>]
 [-Patterns <System.Collections.Generic.List`1[Microsoft.SharePoint.Search.Extended.Security.Config.RegExAliasPatternMapConfig]>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a new regular expression pattern that can be added to the list of patterns for a regular expression based principal aliaser.
This cmdlet creates a regular expression pattern that is used by and input to the New-FASTSearchSecurityRegexAliaser and Set-FASTSearchSecurityRegexAliaser cmdlets.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>New-FASTSearchSecurityRegexAliaserPattern -Regex .* -InputPropertyName mail -MapToUsername "\1"
```

This example creates a regular expression pattern that can be used to map the "mail" property of a Microsoft user store to identities in other user stores.

Use the regex pattern configuration object output from this command for the value of a pattern's parameter in a New-FASTSearchSecurityRegexAliaser or a Set-FASTSearchSecurityRegexAliaser cmdlet.

## PARAMETERS

### -Regex
The regular expression pattern that determines if the user or group should be mapped to another user store.
This regular expression pattern may contain regular expression groups that may be used in the generation of the MapToUsername value.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MapToUsername
The user or group name to look to.
This can also contain regular expression group replacements using the syntax:

\#

where # is the group capture index.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InputPropertyName
The user/group property name this regular expression pattern is matched against.

The InputPropertyName is one of the following:

-- $PRINCIPAL_REFERENCE_ID - The identifier of the user or group. This is the default.
-- $PRINCIPAL_REFERENCE_ALIAS - The alias of the user or group.

Any other property of the user or group.
Refer to your specific user store for other properties that the user store exposes.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Patterns
A list of RegExAliasPatternMapConfig objects.
The RegExAliasPatternMapConfig being created is added to this list.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-FASTSearchSecurityRegexAliaser](Get-FASTSearchSecurityRegexAliaser.md)

[New-FASTSearchSecurityRegexAliaser](New-FASTSearchSecurityRegexAliaser.md)

[Set-FASTSearchSecurityRegexAliaser](Set-FASTSearchSecurityRegexAliaser.md)

