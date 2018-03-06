---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Get-PnPTheme

## SYNOPSIS
Returns the current theme/composed look of the current web.

## SYNTAX 

```powershell
Get-PnPTheme [-DetectCurrentComposedLook [<SwitchParameter>]]
             [-Web <WebPipeBind>]
             [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPTheme
```

Returns the current composed look of the current web.

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPTheme -DetectCurrentComposedLook
```

Returns the current composed look of the current web, and will try to detect the currently applied composed look based upon the actual site. Without this switch the cmdlet will first check for the presence of a property bag variable called _PnP_ProvisioningTemplateComposedLookInfo that contains composed look information when applied through the provisioning engine or the Set-PnPTheme cmdlet.

## PARAMETERS

### -DetectCurrentComposedLook
Specify this switch to not use the PnP Provisioning engine based composed look information but try to detect the current composed look as is.

```yaml
Type: SwitchParameter
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

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## OUTPUTS

### OfficeDevPnP.Core.Entities.ThemeEntity

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)