---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/new-pnptermlabel
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: New-PnPTermLabel
---

# New-PnPTermLabel

## SYNOPSIS
Creates a localized label for a taxonomy term

## SYNTAX 

```powershell
New-PnPTermLabel -Term <Id, Title or TaxonomyItem>
                 -Name <String>
                 -Lcid <Int>
                 [-IsDefault [<SwitchParameter>]]
                 [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Creates a localized label for a taxonomy term. Use Get-PnPTerm -Include Labels to request the current labels on a taxonomy term.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
New-PnPTermLabel -Name "Finanzwesen" -Lcid 1031 -Term (Get-PnPTerm -Identity "Finance" -TermSet "Departments" -TermGroup "Corporate")
```

Creates a new localized taxonomy label in German (LCID 1031) named "Finanzwesen" for the term "Finance" in the termset Departments which is located in the "Corporate" termgroup

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPTerm -Identity "Finance" -TermSet "Departments" -TermGroup "Corporate" | New-PnPTermLabel -Name "Finanzwesen" -Lcid 1031
```

Creates a new localized taxonomy label in German (LCID 1031) named "Finanzwesen" for the term "Finance" in the termset Departments which is located in the "Corporate" termgroup

## PARAMETERS

### -IsDefault
Makes this new label the default label

```yaml
Type: SwitchParameter
Parameter Sets: __AllParameterSets

Required: False
Position: Named
Accept pipeline input: False
```

### -Lcid
The locale id to use for the localized term

```yaml
Type: Int
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Name
The localized name of the term

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Term
The term to add the localized label to

```yaml
Type: Id, Title or TaxonomyItem
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## OUTPUTS

### Microsoft.SharePoint.Client.Taxonomy.Label

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)