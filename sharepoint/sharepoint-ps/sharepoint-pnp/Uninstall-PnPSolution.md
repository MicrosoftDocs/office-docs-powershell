---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/uninstall-pnpsolution
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Uninstall-PnPSolution
---

# Uninstall-PnPSolution

## SYNOPSIS
Uninstalls a sandboxed solution from a site collection

## SYNTAX 

```powershell
Uninstall-PnPSolution -PackageId <GuidPipeBind>
                      -PackageName <String>
                      [-MajorVersion <Int>]
                      [-MinorVersion <Int>]
                      [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Uninstall-PnPSolution -PackageId c2f5b025-7c42-4d3a-b579-41da3b8e7254 -PackageName mypackage.wsp
```

Removes the package to the current site

## PARAMETERS

### -MajorVersion
Optional major version of the solution, defaults to 1

```yaml
Type: Int
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -MinorVersion
Optional minor version of the solution, defaults to 0

```yaml
Type: Int
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -PackageId
ID of the solution, from the solution manifest

```yaml
Type: GuidPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -PackageName
Filename of the WSP file to uninstall

```yaml
Type: String
Parameter Sets: (All)

Required: True
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