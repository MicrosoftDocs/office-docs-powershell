---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Set-FASTSearchSecurityXMLAliaser
---

# Set-FASTSearchSecurityXMLAliaser

## SYNOPSIS
Updates an XML aliaser.

## SYNTAX

```
Set-FASTSearchSecurityXMLAliaser -Identity <String> [-InputPropertyName <String>] [-InputUserStoreId <String>]
 [-OutputUserStoreIds <String[]>] [-PathToXMLFile <String>] [-XMLAliaser <SecurityXMLAliaser>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet updates the configuration settings for an XML principal aliaser.

An XML aliaser maps users/groups from one user store to users/groups in other user stores, based on an XML mapping file.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
PS C:\>Set-FASTSearchSecurityXMLAliaser -Identity xmlalias1 -PathToXMLFile "C:\dev\temp\mapping1.xml"
```

This example uploads and updates the XML mapping for an XML aliaser.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
PS C:\>Get-FASTSearchSecurityAliaser myxmlalias | Set-FASTSearchSecurityXMLAliaser -OutputUserStoreIds ln2 -InputPropertyName '$PRINCIPAL_REFERENCE_ALIAS'
```

This example changes the OutputUserStoreIds and InputPropertyName for the XML aliaser piped from a Get-FASTSearchSecurityAliaser cmdlet.

## PARAMETERS

### -Identity
The identity of the XML aliaser to update.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -InputPropertyName
The user/group property name this regular expression pattern is matched again.

The inputPropertyName is one of the following:

-- $PRINCIPAL_REFERENCE_ID - The identifier of the user or group. This is the default.

Be sure to enclose in single quotes: '$PRINCIPAL_REFERENCE_ID'

-- $PRINCIPAL_REFERENCE_ALIAS - The alias of the user or group.

Be sure to enclose in single quotes: '$PRINCIPAL_REFERENCE_NAME'

Any other property of the user or group.
Refer to your specific user store for other properties that the user store exposes.

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

### -PathToXMLFile
The absolute path to the XML mapping file to upload to the XML aliaser.

The path must specify a file accessible to the security manager.

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

### -XMLAliaser
A SecurityXMLAliaserobject whose property values are being updated.

```yaml
Type: SecurityXMLAliaser
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

[New-FASTSearchSecurityXMLAliaser](New-FASTSearchSecurityXMLAliaser.md)

[Get-FASTSearchSecurityXMLAliaser](Get-FASTSearchSecurityXMLAliaser.md)

