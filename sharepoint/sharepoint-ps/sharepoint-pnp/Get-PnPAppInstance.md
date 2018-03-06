---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Get-PnPAppInstance

## SYNOPSIS
Returns a SharePoint AddIn Instance

## SYNTAX 

### 
```powershell
Get-PnPAppInstance [-Includes <String[]>]
                   [-Identity <AppPipeBind>]
                   [-Web <WebPipeBind>]
                   [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Returns a SharePoint App/Addin that has been installed in the current site

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPAppInstance
```

This will return all addin instances in the site.

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPAppInstance -Identity 99a00f6e-fb81-4dc7-8eac-e09c6f9132fe
```

This will return an addin instance with the specified id.

## PARAMETERS

### -Identity
Specifies the Id of the App Instance

```yaml
Type: AppPipeBind
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: True
```

### -Includes
Specify properties to include when retrieving objects from the server.

```yaml
Type: String[]
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: False
```

### -Web
The web to apply the command to. Omit this parameter to use the current web.

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
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

### List<Microsoft.SharePoint.Client.AppInstance>

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)