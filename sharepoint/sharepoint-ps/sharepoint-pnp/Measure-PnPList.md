---
external help file:
applicable: SharePoint Online, SharePoint 2016
schema: 2.0.0
---
# Measure-PnPList

## SYNOPSIS
Returns statistics on the list object

## SYNTAX 

### 
```powershell
Measure-PnPList -Identity <ListPipeBind>
                [-Includes <String[]>]
                [-ItemLevel [<SwitchParameter>]]
                [-BrokenPermissions [<SwitchParameter>]]
                [-Web <WebPipeBind>]
                [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Measure-PnPList "Documents"
```

Gets statistics on Documents document library

### ------------------EXAMPLE 2------------------
```powershell
Measure-PnPList "Documents" -BrokenPermissions -ItemLevel
```

Displays items and folders with broken permissions inside Documents library

## PARAMETERS

### -BrokenPermissions
Show items with broken permissions

Only applicable to: SharePoint Online, SharePoint Server 2016

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity


Only applicable to: SharePoint Online, SharePoint Server 2016

```yaml
Type: ListPipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -Includes
Specify properties to include when retrieving objects from the server.

Only applicable to: SharePoint Online, SharePoint Server 2016

```yaml
Type: String[]
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: False
```

### -ItemLevel
Show item level statistics

Only applicable to: SharePoint Online, SharePoint Server 2016

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
The web to apply the command to. Omit this parameter to use the current web.

Only applicable to: SharePoint Online, SharePoint Server 2016

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online, SharePoint Server 2016

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)