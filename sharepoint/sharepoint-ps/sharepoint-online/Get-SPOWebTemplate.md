---
external help file: 
applicable: SharePoint Online
title: Get-SPOWebTemplate
schema: 2.0.0
---

# Get-SPOWebTemplate

## SYNOPSIS
Displays all site templates that match the given identity.


## SYNTAX

```
Get-SPOWebTemplate [[-LocaleId] <UInt32>] [-CompatibilityLevel <Int32>] [-Name <String>] [-Title <String>]
 [<CommonParameters>]
```

## DESCRIPTION
The `Get-SPOWebTemplate` cmdlet displays all site templates that match the given identity and are available in SharePoint Online.

You must be a SharePoint Online global administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832.


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
Get-SPOWebTemplate
```
Example 1 returns all the site templates in the language of the administrator site.


### -----------------------EXAMPLE 2-----------------------------
```
Get-SPOWebTemplate -LocaleID 1036
```
Example 2 returns a list of all the French site templates.


## PARAMETERS

### -CompatibilityLevel
Specifies the compatibility level of the site template.


```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocaleId
Specifies the Locale ID of the site template.


```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies the name of the site template.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Title
Specifies the Locale ID of the site template.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
