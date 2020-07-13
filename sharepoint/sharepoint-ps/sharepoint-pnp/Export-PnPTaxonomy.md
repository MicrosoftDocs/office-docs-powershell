---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/export-pnptaxonomy
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Export-PnPTaxonomy
---

# Export-PnPTaxonomy

## SYNOPSIS
Exports a taxonomy to either the output or to a file.

## SYNTAX 

### TermSet
```powershell
Export-PnPTaxonomy [-TermSetId <GuidPipeBind>]
                   [-TermStoreName <String>]
                   [-Lcid <Int>]
                   [-IncludeID [<SwitchParameter>]]
                   [-Path <String>]
                   [-Force [<SwitchParameter>]]
                   [-Delimiter <String>]
                   [-Encoding <Encoding>]
                   [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Export-PnPTaxonomy
```

Exports the full taxonomy to the standard output

### ------------------EXAMPLE 2------------------
```powershell
Export-PnPTaxonomy -Path c:\output.txt
```

Exports the full taxonomy the file output.txt

### ------------------EXAMPLE 3------------------
```powershell
Export-PnPTaxonomy -Path c:\output.txt -TermSetId f6f43025-7242-4f7a-b739-41fa32847254
```

Exports the term set with the specified id

### ------------------EXAMPLE 4------------------
```powershell
Export-PnPTaxonomy -Path c:\output.txt -TermSetId f6f43025-7242-4f7a-b739-41fa32847254 -Lcid 1044
```

Exports the term set with the specified id using Norwegian labels

## PARAMETERS

### -Delimiter
The path delimiter to be used, by default this is '|'

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Encoding
Defaults to Unicode

```yaml
Type: Encoding
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Force
Overwrites the output file if it exists.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -IncludeID
If specified will include the ids of the taxonomy items in the output. Format: &lt;label&gt;;#&lt;guid&gt;

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Lcid
Specify the language code for the exported terms

```yaml
Type: Int
Parameter Sets: TermSet

Required: False
Position: Named
Accept pipeline input: False
```

### -Path
File to export the data to.

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -TermSetId
If specified, will export the specified termset only

```yaml
Type: GuidPipeBind
Parameter Sets: TermSet

Required: False
Position: Named
Accept pipeline input: False
```

### -TermStoreName
Term store to export; if not specified the default term store is used.

```yaml
Type: String
Parameter Sets: TermSet

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)